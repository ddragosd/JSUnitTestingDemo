AsyncTestCase("LoadMinionsCommandTest", {
    server : null,
    collection: null,

    setUp: function () {
        this.server = sinon.fakeServer.create();
        this.collection = new MinionsCollection();
    },

    tearDown: function () {
        this.server.restore();
        this.collection = null;
    },

    testReadSuccess: function() {
        var cmd,fakeResponse,url;
        fakeResponse = function(xhr, id) {
            xhr.respond( 200, { "Content-Type": "application/json" },
                    "[{\"name\":\"Bob the Minion\"},{\"name\":\"Mark the Minion\"}]" );
        }
        url = "content/minions";
        this.server.respondWith("GET", url, fakeResponse );

        cmd = new LoadMinionsCommand(url, this.collection);
        cmd.execute();

        this.server.respond();

        assertNotNull(this.collection.getMinions());
        assertEquals(2, this.collection.getMinions().length);
        assertEquals("Mark the Minion", this.collection.getMinions()[1].name);
    },

    testReadError: function(queue) {
        var cmd,fakeResponse,url,errorThrown;

        errorThrown = false;

        fakeResponse = function(xhr, id) {
            xhr.respond( 503, { "Content-Type": "application/json" },
                    '{ "error": { "class": "err_cls", "message":"err_msg"} }' )
        }

        url = "content/minions";
        this.server.respondWith("GET", url, fakeResponse );

        assertFalse( errorThrown );

        queue.call('Step1: send the request', function(callbacks){
            cmd = new LoadMinionsCommand(url, this.collection);
            cmd.execute();

            var windowEventHandler = callbacks.add(function ( event, url, lineNumber ) {
                                event.preventDefault();
                                errorThrown = true;
                                } )
            window.addEventListener( "error", windowEventHandler );

            this.server.respond();
        });

        queue.call('Step2: test the request response', function(callbacks){
            assertNull(this.collection.getMinions());
            assertTrue("Command should have thrown an error", errorThrown );
        });

    }

})
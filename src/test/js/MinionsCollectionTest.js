TestCase("MinionsCollectionTest", {
    collection : null,

    setUp : function () {
        this.collection = new MinionsCollection();
    },

    tearDown: function () {
        this.collection = null;
    },

    testInitialization: function () {
        assertNull("collection should be null initially", this.collection.getMinions());
    },

    testList : function () {
        var bob, mark;
        bob = new Minion("Bob the Minion");
        mark = new Minion("Mark the Minion");

        this.collection.setMinions([bob,mark]);
        assertNotNull(this.collection.getMinions());
        assertEquals(2, this.collection.getMinions().length);
        assertEquals("Mark the Minion", this.collection.getMinions()[1].name);
    }
})
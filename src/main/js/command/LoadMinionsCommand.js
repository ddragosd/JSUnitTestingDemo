(function() {
    window.LoadMinionsCommand = (function() {
        LoadMinionsCommand.prototype.endpoint = null;
        LoadMinionsCommand.prototype.collection = null;

        function LoadMinionsCommand(url, collection) {
            this.endpoint = url;
            this.collection = collection;
        }

        LoadMinionsCommand.prototype.execute = function () {
            $.ajax({
                url: this.endpoint,
                type: 'GET',
                context: this,
                success: this.result,
                error: this.error,
                dataType: 'json'
              });
        }

        LoadMinionsCommand.prototype.result = function (data, textStatus, xmlHttpRequest) {
            this.collection.setMinions( data );
        }

        LoadMinionsCommand.prototype.error = function (xmlHttpRequest, textStatus, errorThrown) {
            var error;
            error = jQuery.parseJSON(xmlHttpRequest.responseText).error;
            throw new Error("Could not get Minions!");
        }


        return LoadMinionsCommand;
    })();
}).call(this);
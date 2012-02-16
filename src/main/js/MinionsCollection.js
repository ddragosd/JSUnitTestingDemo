(function() {
    window.MinionsCollection = (function() {

        function MinionsCollection() {
            this._list = null;
        }

        MinionsCollection.prototype.setMinions = function ( list ) {
            this._list = list;
        }

        MinionsCollection.prototype.getMinions = function () {
            return this._list;
        }

        return MinionsCollection;
    })();
}).call(this);
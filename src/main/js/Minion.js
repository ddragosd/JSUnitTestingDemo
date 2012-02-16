(function() {
    window.Minion = (function() {
        Minion.prototype.skinColor = null;

        Minion.prototype.name = "untitled";

        function Minion( name ) {
            this.name = name;
        }

        Minion.prototype.isValid = function () {
            return this.skinColor === "yellow";
        }

        return Minion;
    })();
}).call(this);
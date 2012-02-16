TestCase( "MinionTest", {
    minion : null,

    setUp: function () {
        this.minion = new Minion( "happyM" );
    },

    tearDown : function () {
        this.minion = null;
    },

    testMinionIsValid: function () {
        assertFalse("Minion should not be valid", this.minion.isValid() );
        this.minion.skinColor = "yellow";
        assertTrue("Minion should be valid", this.minion.isValid() );
    }
})
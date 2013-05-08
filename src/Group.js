(function() {
    /**
     * Group constructor.  Groups are used to contain shapes or other groups.
     * @constructor
     * @augments Kinetic.Container
     * @param {Object} config
     * {{NodeParams}}
     * {{ContainerParams}}
     */
    Kinetic.Util.addMethods(Kinetic.Group, {
        _initGroup: function(config) {
            this.nodeType = 'Group';
            this.createAttrs();
            // call super constructor
            Kinetic.Container.call(this, config);
        }
    });
    Kinetic.Util.extend(Kinetic.Group, Kinetic.Container);
})();

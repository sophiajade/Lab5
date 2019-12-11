L.Control.Legend = L.Control.extend({
    options: {
        position: 'bottomright',
        collapsed: true,
        buttonHtml: 'legend'
    },

    onRemove: function () {
        this._map.off('click', this.collapse, this);

        this._container = null;
    },

    onAdd: function (map) {
        this._map = map;

        return this._initLayout();
    },

    _initLayout: function() {
        var className = 'leaflet-legend',
            container = this._container = L.DomUtil.create('div', className),
            collapsed = this.options.collapsed;

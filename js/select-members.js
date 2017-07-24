function format(state) {
    console.log(state.id);
    if (!state.id) return state.text; // optgroup
    return state.text + " <i class='info'>link</i>";
}

var select2 = $("#select-member").select2({
    formatResult: format,
    formatSelection: format,
    escapeMarkup: function(m) { return m; }
}).data('select2');

select2.onSelect = (function(fn) {
    console.log("onSelect");
    return function(data, options) {
        var target;
        console.log("something");
        if (options != null) {
            target = $(options.target);
        }
        
        if (target && target.hasClass('info')) {
            alert('click!');
        } else {
            return fn.apply(this, arguments);
        }
    }
})(select2.onSelect);
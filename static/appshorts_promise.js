var appShorts = appShorts || {};

appShorts.get_promise_base = function() {
    return {
        resolve: function(data) {
            if (this.then_callback)
                return this.then_callback(data);
            this.data = data
        },
        reject: function(data) {
            if (this.catch)
                return this.catch(data);
            this.data = data;
        },
        then: function(func) {
            if (this.data)
                return func.call(this, this.data);
            this.then_callback = func;
        },
        catch: function(func) {
            if (this.data)
                return func.call(this, this.data);
            this.data = null;
            this.catch_callback = func;
        }
    }
};

appShorts.promise = function(func) {
    var promise_obj = appShorts.get_promise_base();
    return func(promise_obj.resolve.bind(promise_obj), promise_obj.reject.bind(promise_obj));
}
define(['filters/filters'],
    function(filters) {
        filters.filter('titleCase', function() {
            var titleCaseFilter = function(input) {
                var words = input.split(' ');
                for (var i= 0,len=words.length; i<len; i++) {
                    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
                }
                return words.join(' ');
            }
            return titleCaseFilter;
        })
        filters.filter('checkmark', function() {
            return function(input) {
                // return input ? '\u2713' : '\u2718';
                return input ? input : '\u2718';
            }
        });
    });
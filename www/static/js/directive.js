angular.module("lcReqApp")
    .directive('clickSelect', [
        function () {
            return {
                link: function (scope, element, attr, ctrl) {
                    element.bind('click', function () {
                        element.select();
                    });
                }
            };
        }
    ])
    .directive('prettyprint', function () {
        function replaceText(str) {
            return str.replace(/[<>\"\'\t\n]/g, function (m) {
                return {
                    '<' : '&lt;',
                    '>' : '&gt;',
                    "'" : '&#39;',
                    '"' : '&quot;',
                    '\t': '  ',
                    '\n': '<br/>' // needed for IE
                }[m]
            });
        }
        return {
            restrict: 'EA',
            link    : function postLink(scope, element, attrs) {
                if (!attrs.prettyprint)return;
                var html = scope.$eval(attrs.prettyprint);
                html = replaceText(html);
                element.html(prettyPrintOne(html, '', false))

            }
        };
    });
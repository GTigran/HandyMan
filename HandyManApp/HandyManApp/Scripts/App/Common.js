var Handyman;
(function (Handyman) {
    var Common;
    (function (Common) {
        function ConfigureCoreMinHeight() {
            var $container = $("#core");
            var minHeight = $(window).height() - 130;
            $container.css("minHeight", minHeight);
        }
        $(function () {
            ConfigureCoreMinHeight();
            $(window).on("resize", function () {
                ConfigureCoreMinHeight();
            });
        });
    })(Common = Handyman.Common || (Handyman.Common = {}));
})(Handyman || (Handyman = {}));
//# sourceMappingURL=Common.js.map
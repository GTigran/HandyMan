module Handyman.Common {

    function ConfigureCoreMinHeight() {

        var $container = $("#core");

        var minHeight = $(window).height() - 130;

        $container.css("minHeight", minHeight);


    }


    $(function() {
        ConfigureCoreMinHeight();
        $(window).on("resize", function() {
            ConfigureCoreMinHeight();
        });
    });
}

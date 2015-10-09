(function () {
    'use strict';

    /**
     * @ngdoc service
     * @name mapNavigationService
     * @module app.ui.mapnav
     *
     * @description
     * The `mapNavigationService` service provides access to map navgiation compoent's actions like `zoom`, `geolocation`, `full extent` and `history extent`.
     *
     */
    angular
        .module('app.ui.mapnav')
        .factory('mapNavigationService', mapNavigationService);

    function mapNavigationService() {
        const service = {
            // FIXME: this config snippet should obvisouly come from config service
            config: {
                zoom: 'buttons', // 'all', 'slider', 'buttons'
                extra: [
                    'geoLocation',
                    'marquee',
                    'home',
                    'history'
                ]
            },
            controls: {},
            zoomIn: zoomIn,
            zoomOut: zoomOut,
            zoomTo: zoomTo
        };

        service.controls = {
            zoom: {
                inButton: {
                    label: 'Zoom in',
                    icon: 'add',
                    tooltip: 'Zoom in',
                    call: zoomIn
                },
                slider: {

                    // TODO: add slider properties when we find a suitable slider lib
                },
                outButton: {
                    label: 'Zoom out',
                    icon: 'remove',
                    tooltip: 'Zoom out',
                    call: zoomOut
                }
            },
            extra: {
                geoLocation: {
                    label: 'Your Location',
                    icon: 'my_location',
                    tooltip: 'Your Location',
                    call: function () {} // FIXME: user proper call
                },
                marquee: {
                    label: '???',
                    icon: 'search',
                    tooltip: '???',
                    call: function () {} // FIXME: user proper call
                },
                home: {
                    label: 'Canada',
                    icon: 'home',
                    tooltip: 'Canada',
                    call: function () {} // FIXME: user proper call
                },
                history: {
                    label: 'History',
                    icon: 'history',
                    tooltip: 'History',
                    call: function () {} // FIXME: user proper call
                }
            }
        };

        return service;

        function zoomIn(by = 1) {
            console.log('Zoom in by', by);

            // FIXME: user proper call
        }

        function zoomOut(by = 1) {
            console.log('Zoom out by', by);

            // FIXME: user proper call
        }

        function zoomTo(level) {
            console.log('Zoom to the level:', level);

            // FIXME: user proper call
        }
    }
})();

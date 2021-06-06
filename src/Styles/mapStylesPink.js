export default [
    {
        featureType: "water",
        elementType: "geometry",
        stylers: [
            {
                color: "#7bc6dc"
            }
        ]
    },
    {
        featureType: "landscape",
        elementType: "geometry",
        stylers: [
            {
                color: "#1e953c"
            }
        ]
    },
    {
        featureType: "poi",
        elementType: "geometry",
        stylers: [
            {
                color: "#eaa2d9"
            }
        ]
    },
    {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [
            {
                color: "#cd4cad"
            }
        ]
    },
    {
        featureType: "road.arterial",
        elementType: "geometry",
        stylers: [
            {
                color: "#1f8a70"
            },
            {
                lightness: -20
            }
        ]
    },
    {
        featureType: "road.local",
        elementType: "geometry",
        stylers: [
            {
                color: "#1f8a70"
            },
            {
                lightness: -17
            }
        ]
    },
    {
        elementType: "labels.text.stroke",
        stylers: [
            {
                color: "#020101"
            },
            {
                visibility: "on"
            },
            {
                weight: 0.9
            }
        ]
    },
    {
        elementType: "labels.text.fill",
        stylers: [
            {
                visibility: "on"
            },
            {
                color: "#ffffff"
            }
        ]
    },
    {
        featureType: "poi",
        elementType: "labels",
        stylers: [
            {
                visibility: "simplified"
            }
        ]
    },
    {
        elementType: "labels.icon",
        stylers: [
            {
                visibility: "off"
            }
        ]
    },
    {
        featureType: "transit",
        elementType: "geometry",
        stylers: [
            {
                color: "#f186df"
            },
            {
                lightness: -10
            }
        ]
    },
    {},
    {
        featureType: "administrative",
        elementType: "geometry",
        stylers: [
            {
                color: "#ef59b8"
            },
            {
                weight: 0.7
            }
        ]
    }
];

const panorama1 = new PANOLENS.ImagePanorama( 'images/panel1.jpeg' );
const panorama2 = new PANOLENS.ImagePanorama( 'images/pano5.jpg' );

let imageContainer = document.querySelector(".image-container");

const infospotPostions = [
    new THREE.Vector3(-2136.06, 16.30, 890.14),
    new THREE.Vector3(-3136.06, 296.30, -4290.14),
]

const viewer = new PANOLENS.Viewer({
    container: imageContainer,
    autoRotate: true,
    autoRotateSpeed: 0.3,
    controlBar: true,
});


panorama1.link(panorama2, infospotPostions[0])
panorama2.link(panorama1, infospotPostions[1])


viewer.add( panorama1, panorama2 );



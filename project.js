import * as THREE from './three.js-dev/build/three.module.js';
import * as dat from './three.js-dev/examples/jsm/libs/dat.gui.module.js';
import {OrbitControls} from './three.js-dev/examples/jsm/controls/OrbitControls.js';
import {OBJLoader} from './three.js-dev/examples/jsm/loaders/OBJLoader.js';
import {MTLLoader} from './three.js-dev/examples/jsm/loaders/MTLLoader.js';
import {GLTFLoader} from './three.js-dev/examples/jsm/loaders/GLTFLoader.js';

let mingyuCanvas = document.querySelector('#mingyu');

let renderer = new THREE.WebGLRenderer( { canvas: mingyuCanvas, antialias: true } );
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor( 0xF2F2F2 );
renderer.setAnimationLoop( animate );


let scene = new THREE.Scene();

let camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.01, 2000);
camera.position.z = 55;
camera.position.y = 50;
camera.position.x = 60;
scene.add( camera );

let light = new THREE.PointLight( 0xFFFFFF , 1);
light.position.set(-50,130,50);
scene.add(light);


let light1 = new THREE.PointLight( 0xFFFFFF , 1);
light1.position.set(50,10,50);
scene.add(light1);


let lightHelper = new THREE.PointLightHelper(light,1);
scene.add( lightHelper );




let controls = new OrbitControls(camera, renderer.domElement);
controls.target.x = 1;
controls.target.y = 1;

// let gui = new dat.GUI();

let room;

let gltfLoader = new GLTFLoader();
gltfLoader.load('models/room.gltf',function(gltf){
   room = gltf.scene;
   scene.add(room);
});


$('.content').hide();


$(function(){
    $('#btn1').click(function(){
        $('.content').hide();
        $('#room').show();

        if(room){
            room.getObjectByName('Cube001_1').visible = true;
            room.getObjectByName('Cube001_2').visible = true;
        }
    });

    $('#btn2').click(function(){
        $('.content').hide();
        $('#cafe').show();

        if(room){
            room.getObjectByName('Cube001_1').visible = true;
            room.getObjectByName('Cube001_2').visible = true;
        }
    });

    $('#btn3').click(function(){
        $('.content').hide();
        $('#flower').show();

        if(room){
            room.getObjectByName('Cube001_1').visible = true;
            room.getObjectByName('Cube001_2').visible = true;
        }
    });

    $('#btn4').click(function(){
        $('.content').hide();
        $('#night').show();

        if(room){
            room.getObjectByName('Cube001_1').visible = false;
            room.getObjectByName('Cube001_2').visible = false;
        }
        
    });

    $('#btn5').click(function(){
        $('.content').hide();
        $('#star').show();

        if(room){
            room.getObjectByName('Cube001_1').visible = true;
            room.getObjectByName('Cube001_2').visible = true;
        }
    });

    $('#btn6').click(function(){
        $('.content').hide();
        $('#self').show();

        if(room){
            room.getObjectByName('Cube001_1').visible = true;
            room.getObjectByName('Cube001_2').visible = true;
        }
    });

    $('#btn7').click(function(){
        $('.content').hide();

        if(room){
            room.getObjectByName('Cube001_1').visible = true;
            room.getObjectByName('Cube001_2').visible = true;
        }
    });

});


let mouse = new THREE.Vector2();
    $(window).on('mousemove', function(event){
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1
    mouse.y = - (event.clientY / window.innerHeight) * 2 + 1
                });
   
let raycaster = new THREE.Raycaster();
let currentInt = null;

$('#mingyu').click(function(){
    raycaster.setFromCamera(mouse, camera)
    let intersects = raycaster.intersectObjects( scene.children, true );
    if (intersects.length > 0) {
        currentInt = intersects[0].object;
        console.log("이름: " + currentInt.name);
        console.log(camera.position);
        console.log(controls.target);


        // 아를르의 포룸광장의 카페 테라스
        if( currentInt.name == '큐브005_2' ){
            window.open('https://www.etsy.com/uk/listing/868220937/cafe-terrace-at-night-brooch-van-gogh?ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=van+gogh+vans&ref=sc_gallery-12-9&from_market_listing_grid_ad=1&plkey=856526b44121f4da427821ea4d9599bfcf563b92%3A868220937&frs=1', '_blank');
        }


        if( currentInt.name == 'Cube001_3' ){ // 별이빛나는밤
            window.open('https://www.etsy.com/uk/listing/686788867/starry-night-vincent-van-gogh-phone-case?ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=van+gogh+vans&ref=sr_gallery-2-7&from_market_listing_grid_organic=1&frs=1', '_blank');
        }

        // 해바라기
        if( currentInt.name == 'Cube003_2' || currentInt.name == 'Cube003_1' || currentInt.name == 'Cube003' ){
            window.open('https://www.etsy.com/uk/listing/724215257/vincent-van-gogh-sunflowers-canvas-tote?ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=van+gogh+vans&ref=sr_gallery-2-16&from_market_listing_grid_organic=1&frs=1&col=1', '_blank');
        }

        //론 강에 비치는 별빛
        if( currentInt.name == 'Cube004_1' ){
            window.open('https://www.etsy.com/uk/listing/819043205/vincent-van-gogh-o-starry-night-over-the?ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=van+gogh+vans&ref=sr_gallery-3-29&from_market_listing_grid_organic=1', '_blank');
        }

        //자화상
        if( currentInt.name == '큐브003_1' || currentInt.name == '큐브007_1'){
            window.open('https://www.etsy.com/uk/listing/1025550571/vincent-van-gogh-self-portrait-1887?ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=van+gogh+vans&ref=sc_gallery-11-17&from_market_listing_grid_ad=1&plkey=e2c3705baa7a1b9f86c3c2b4fa276a289a01b0a9%3A1025550571', '_blank');
        }
    }


});


let opa = 1;
let prevInt = null;

function animate( time ) {

    renderer.render(scene, camera);
    controls.update();

    lightHelper.update();

    TWEEN.update( time );

    raycaster.setFromCamera(mouse, camera)
    let intersects = raycaster.intersectObjects( scene.children, true );

    if (intersects.length > 0) {
        currentInt = intersects[0].object;
    }else {
        currentInt = null;
        opa = 1;
    }

    if( prevInt != currentInt){
        opa = 1;
    }

    scene.traverse( function(child){
        if(child.type =='Mesh'){
            child.material.opacity = 1;
        }
    });

    if(currentInt){
        if(currentInt.name == 'Cube001_3' || currentInt.name == 'Cube003_2' || currentInt.name == 'Cube003_1' || currentInt.name == 'Cube003' || currentInt.name == '큐브005_2'  || currentInt.name == 'Cube004_1' || currentInt.name == '큐브003_1' || currentInt.name == '큐브007_1'){
            currentInt.material.transparent = true;
            currentInt.material.opacity = opa;
            if(opa > 0.5) opa -= 0.05;
        } 

    }

    prevInt = currentInt;

}


$('#btn1').click(function(){

let animation1 = new TWEEN.Tween({ cx: camera.position.x, cy: camera.position.y, cz: camera.position.z})
.to({ cx: 50, cy: 30, cz: 80}, 2000)
.easing(TWEEN.Easing.Cubic.Out)
.onUpdate(function(val){
    camera.position.set(val.cx, val.cy, val.cz)
    controls.target = new THREE.Vector3(-100 , 15 , 10);

})
.start();
})

$('#btn2').click(function(){

let animation2 = new TWEEN.Tween({ cx: camera.position.x, cy: camera.position.y, cz: camera.position.z})
.to({ cx: -66, cy: 53, cz: 90}, 2000)
.easing(TWEEN.Easing.Cubic.Out)
.onUpdate(function(val){
    camera.position.set(val.cx, val.cy, val.cz)
    controls.target = new THREE.Vector3(-300 , 50 , 90);
})
.start();
})


$('#btn3').click(function(){

let animation3 = new TWEEN.Tween({ cx: camera.position.x, cy: camera.position.y, cz: camera.position.z})
.to({ cx: -40, cy: 40, cz: 85}, 1000)
.easing(TWEEN.Easing.Cubic.Out)
.onUpdate(function(val){
    camera.position.set(val.cx, val.cy, val.cz)
    controls.target = new THREE.Vector3(-300 , 40 , 85);
})
.start();
})


$('#btn4').click(function(){

let animation4 = new TWEEN.Tween({ cx: camera.position.x, cy: camera.position.y, cz: camera.position.z})
.to({ cx: -47, cy: 62, cz: 70}, 1000)
.easing(TWEEN.Easing.Cubic.Out)
.onUpdate(function(val){
    camera.position.set(val.cx, val.cy, val.cz)
    controls.target = new THREE.Vector3(-300 , 62 , 50);
})
.start();
})

$('#btn5').click(function(){

let animation5 = new TWEEN.Tween({ cx: camera.position.x, cy: camera.position.y, cz: camera.position.z})
.to({ cx: -65, cy: 62, cz: 30}, 1000)
.easing(TWEEN.Easing.Cubic.Out)
.onUpdate(function(val){
    camera.position.set(val.cx, val.cy, val.cz)
    controls.target = new THREE.Vector3(-300 , 62 ,30);
})
.start();
})

$('#btn6').click(function(){

let animation6 = new TWEEN.Tween({ cx: camera.position.x, cy: camera.position.y, cz: camera.position.z})
.to({ cx: -45, cy: 70, cz: 25}, 2000)
.easing(TWEEN.Easing.Cubic.Out)
.onUpdate(function(val){
    camera.position.set(val.cx, val.cy, val.cz)
    controls.target = new THREE.Vector3(-45 , 62 ,-100);
})
.start();
})


$(window).resize(function(){
    renderer.setSize( window.innerWidth, window.innerHeight );
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
})


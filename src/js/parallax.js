

function createParl() {

    var scene = document.getElementById('scene');
    scene.className = 'scene'
    var parallaxInstance = new Parallax(scene, {
        pointerEvents: true
    });
    
}

function heightAdjustment() {
    scene.style.height = `${document.documentElement.clientHeight}px`
}

export {createParl, heightAdjustment} 
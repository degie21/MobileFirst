
        var card = document.getElementById('activator');
        var tl = gsap.timeline({defaults: {ease: "power2.inOut"}})

        var toggle = false;

        tl.to('.activator', {
            background: '#805ad5',
            'borderRadius': '0 5em 5em 0'
        });
        tl.to('nav', {
            'clipPath': 'ellipse(100% 100% at 50% 50%)'
        }, "-=.5")
        tl.pause();

        card.addEventListener('click', () => {
            toggle = !toggle;
            if (toggle ? tl.play() : tl.reverse());
        })

        var transition = gsap.timeline({ ease: 
            Power0.easeNone, y: -500 });
        transition.from(".transition1",{
            y: '-30%',
            opacity: 0
        })
        transition.from(".transition2",{
            x: '-30%',
            opacity: 0
        })
        transition.from(".transition3",{
            opacity: 0
        })
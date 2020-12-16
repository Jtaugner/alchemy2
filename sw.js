const CACHE_NAME = 'Alchem';
const cacheList = [
    'index.html',
    'main.js',
    'reset.css',
    'styles.css',
    'images/ground.png','images/water.png','images/fire.png','images/air.png','images/wind.png','images/sea.png','images/pressure.png','images/steam.png','images/lava.png','images/stone.png','images/swamp.png','images/island.png','images/cloud.png','images/rain.png','images/spark.png','images/cell.png','images/cells.png','images/thunder.png','images/energy.png','images/bacteria.png','images/sprout.png','images/tree.png','images/strength.png','images/stick.png','images/pick.png','images/cave.png','images/metal.png','images/dust.png','images/powder.png','images/geyser.png','images/gravel.png','images/sillicium.png','images/sand.png','images/desert.png','images/clay.png','images/glass.png','images/farm.png','images/wheat.png','images/kiln.png','images/log.png','images/house.png','images/typhoon.png','images/mud.png','images/smoke.png','images/vodka.png','images/brick.png','images/sky.png','images/bomb.png','images/molotov.png','images/vodka2.png','images/dam.png','images/salt.png','images/electricity.png','images/lamp.png','images/oxygen.png','images/hydrogen.png','images/algae.png','images/worm.png','images/fish.png','images/tadpole.png','images/frog.png','images/bird.png','images/eggs.png','images/crocodile.png','images/whale.png','images/rat.png','images/monkey.png','images/australopithecus.png','images/boy.png','images/girl.png','images/child.png','images/lava-lamp.png','images/egg.png','images/weapon.png','images/knife.png','images/fishKnife.png','images/fishReady.png','images/flour.png','images/dough.png','images/meat.png','images/bread.png','images/steak.png','images/dead.png','images/pterodactyl.png','images/dragon.png','images/gor.png','images/mushroom.png','images/coal.png','images/motor.png','images/engine.png','images/soldier.png','images/doctor.png','images/building.png','images/hospital.png','images/city.png','images/disaster.png','images/earthquake.png','images/tornado.png','images/war.png','images/witch.png','images/camel.png','images/car.png','images/airplane.png','images/statue.png','images/mermaid.png','images/tank.png','images/cat.png','images/degu.png','images/ice.png','images/iceberg.png','images/penguin.png','images/ship.png','images/pirates.png','images/chest.png','images/key.png','images/gold.png','images/sandwich.png','images/continent.png','images/earth.png','images/globe.png','images/fireworks.png','images/fireman.png','images/flower.png','images/beehive.png','images/honey.png','images/butterfly.png','images/copy.png','images/money.png','images/valer.png','images/sauna.png','images/apple.png','images/mirror.png','images/forest.png','images/bear.png','images/russia.png','images/boat.png','images/diamond.png','images/graphite.png','images/pencil.png','images/essay.png','images/book.png','images/writer.png','images/sushi.png','images/juice.png','images/cactus.png','images/coffin.png','images/scorpion.png','images/cray.png','images/beaver.png','images/blood.png','images/leech.png','images/therapy.png','images/cow.png','images/milk.png','images/kefir.png','images/tvorog.png','images/cheese.png','images/fondue.png','images/pizza.png','images/timer.png','images/scientist.png','images/favicon.png','images/macbook.png','images/neural.png','images/droid.png','images/country.png','images/switzerland.png','images/japan.png','images/italy.png','images/china.png','images/sun.png','images/beer.png','images/bookcase.png','images/rock.png','images/www.png','images/mineral-water.png','images/fishing.png','images/lizard.png','images/turf.png','images/whisky.png','images/road1.png','images/road2.png','images/alcoholic.png','images/interpreter.png','images/grape.png','images/wine.png','images/seashell.png','images/grave.png','images/graveyard.png','images/zombie.png','images/cannabis.png','images/cigar.png','images/locomotive.png','images/snail.png','images/caviar.png','images/moon.png','images/sunflower.png','images/brilliant.png','images/dog.png','images/lighthouse.png','images/pig.png','images/guinea-pig.png','images/pie.png','images/chocolate.png','images/brownie.png','images/resistor.png','images/chip.png','images/cpu.png','images/phone.png','images/iphone.png','images/cosmos.png','images/galaxy.png','images/influenza.png','images/egypt.png','images/trans-fat.png','images/butter.png','images/soap.png','images/zoo.png','images/eclipse.png','images/scissors.png','images/finland.png','images/scotland.png','images/ebook.png','images/poison2.png','images/nuclear.png',
    'images/drop.png', 'images/add.png', 'images/poison.png', 'images/selected.png', 'images/recipe.png', 'images/river.png',
    'images/mountain.png','images/landscape.png','images/glacier.png','images/wildfire.png',
    'images/photoshop.png',
    "images/newton.png","images/bank.png","images/pool.png","images/beatle.png","images/trash.png","images/cockroach.png","images/elephant.png","images/star.png","images/alien.png","images/aquarium.png","images/panda.png","images/bamboo.png","images/music.png","images/rope.png","images/spider.png","images/rainbow.png","images/leprechaun.png","images/angel.png","images/damon.png","images/jeep.png","images/needle.png","images/hedgehog.png","images/guru.png","images/calculator.png","images/lock.png","images/crowbar.png","images/snow.png","images/snowman.png","images/winter.png","images/christmas.png","images/hare.png","images/camera.png","images/movie.png","images/cinema.png","images/miner.png","images/chicken.png","images/yacht.png","images/train.png","images/dumplings.png",
    'images/cross.png', "images/bg.png"
];
this.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(cacheList);
        })
    );
});
const CACHE_PREFIX = 'Alchem-1';

this.addEventListener('activate', function (event) {
    event.waitUntil(
        caches.keys().then(keyList => {
            return Promise.all(keyList.map(key => {
                if (key.indexOf(CACHE_PREFIX) === 0 && key !== CACHE_NAME) {
                    return caches.delete(key);
                }
            }));
        })
    );
});
this.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});

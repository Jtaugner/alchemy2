window.onload = function(){
    let advTime = true;
    let showAdv = undefined;
    let ysdkGame;
    let playerGame;
    let ww;
    let wh;
    let selectedIcons = [];
    const ELEMENTS = [
        {name: 'Земля', img: 'ground.png', id: 0, contacts: {0: 6, 2: 8, 1:10, 9: 226}},
        {name: 'Вода', img: 'water.png', id: 1, contacts: {1: 5, 3:7}},
        {name: 'Огонь', img: 'fire.png', id: 2, contacts: {4: 18, 9: 38, 20: 190}},
        {name: 'Воздух', img: 'air.png', id: 3, contacts: {3: 4}},
        {name: 'Ветер', img: 'wind.png', id: 4, contacts: {0: 27, 210: 211}},
        {name: 'Море', img: 'sea.png', id: 5, contacts: {0: 11, 4: 41, 7: 51}},
        {name: 'Давление', img: 'pressure.png', id: 6, contacts: {6: 22, 21: 126}},
        {name: 'Пар', img: 'steam.png', id: 7, contacts: {3: 12, 0: 29, 68: 129, 69: 129}},
        {name: 'Лава', img: 'lava.png', id: 8, contacts: {3: 9}},
        {name: 'Камень', img: 'stone.png', id: 9, contacts: {9: 14, 1: 25, 24: 103}},
        {name: 'Болото', img: 'swamp.png', id: 10, contacts: {32: 34, 6: 178}},
        {name: 'Остров', img: 'island.png', id: 11, contacts: {11: 117}},
        {name: 'Облако', img: 'cloud.png', id: 12, contacts: {1: 13, 3:46, 69: 248, 108: 257}},
        {name: 'Дождь', img: 'rain.png', id: 13, contacts: {14: 17}},
        {name: 'Искра', img: 'spark.png', id: 14, contacts: {23: 120, 210: 238}},
        {name: 'Амёба', img: 'cell.png', id: 15, contacts: {15: 16, 1: 56}},
        {name: 'Многоклеточное', img: 'cells.png', id: 16, contacts: {18: 19}},
        {name: 'Молния', img: 'thunder.png', id: 17, contacts: {1: 15, 26: 173}},
        {name: 'Энергия', img: 'energy.png', id: 18, contacts: {0: 20, 17: 52, 1:225}},
        {name: 'Бактерии', img: 'bacteria.png', id: 19, contacts: {0: 57, 9: 186, 3: 212}},
        {name: 'Росток', img: 'sprout.png', id: 20, contacts: {1: 21, 0: 36, 20: 122}},
        {name: 'Дерево', img: 'tree.png', id: 21, contacts: {24: 39, 38: 87, 21: 132, 0: 184}},
        {name: 'Сила', img: 'strength.png', id: 22, contacts: {21: 23}},
        {name: 'Палка', img: 'stick.png', id: 23, contacts: {9: 24, 2: 43}},
        {name: 'Инструмент', img: 'pick.png', id: 24, contacts: {0: 30, 26: 74}},
        {name: 'Пещера', img: 'cave.png', id: 25, contacts: {24: 26}},
        {name: 'Металл', img: 'metal.png', id: 26, contacts: {38: 114}},
        {name: 'Пыль', img: 'dust.png', id: 27, contacts: {2: 28}},
        {name: 'Порох', img: 'powder.png', id: 28, contacts: {2: 47, 26: 73}},
        {name: 'Гейзер', img: 'geyser.png', id: 29, contacts: {35: 175}},
        {name: 'Гравий', img: 'gravel.png', id: 30, contacts: {22: 31, 32: 180}},
        {name: 'Кремний', img: 'sillicium.png', id: 31, contacts: {31: 32, 160: 205}},
        {name: 'Песок', img: 'sand.png', id: 32, contacts: {32: 33, 38: 35, 1: 42, 35:159}},
        {name: 'Пустыня', img: 'desert.png', id: 33, contacts: {63: 100, 21: 144, 165: 213}},
        {name: 'Глина', img: 'clay.png', id: 34, contacts: {38: 45}},
        {name: 'Стекло', img: 'glass.png', id: 35, contacts: {45: 92, 1: 108, 26: 131, 58: 240}},
        {name: 'Ферма', img: 'farm.png', id: 36, contacts: {24: 37}},
        {name: 'Пшеница', img: 'wheat.png', id: 37, contacts: {1: 44, 24: 77}},
        {name: 'Печь', img: 'kiln.png', id: 38, contacts: {}},
        {name: 'Доски', img: 'log.png', id: 39, contacts: {35: 40, 1: 135}},
        {name: 'Дом', img: 'house.png', id: 40, contacts: {1: 233}},
        {name: 'Тайфун', img: 'typhoon.png', id: 41, contacts: {}},
        {name: 'Грязь', img: 'mud.png', id: 42, contacts: {152: 200, 37: 203}},
        {name: 'Костёр', img: 'smoke.png', id: 43, contacts: {}},
        {name: 'Спирт', img: 'vodka.png', id: 44, contacts: {2: 48, 1: 49}},
        {name: 'Кирпич', img: 'brick.png', id: 45, contacts: {1: 50}},
        {name: 'Небо', img: 'sky.png', id: 46, contacts: {156: 195, 46: 210}},
        {name: 'Бомба', img: 'bomb.png', id: 47, contacts: {}},
        {name: 'Молотов', img: 'molotov.png', id: 48, contacts: {}},
        {name: 'Водка', img: 'vodka2.png', id: 49, contacts: {68: 182}},
        {name: 'Плотина', img: 'dam.png', id: 50, contacts: {47: 95, 133: 148}},
        {name: 'Соль', img: 'salt.png', id: 51, contacts: {78: 202}},
        {name: 'Электричество', img: 'electricity.png', id: 52, contacts: {35: 53, 1: 54, 207: 162}},
        {name: 'Лампа', img: 'lamp.png', id: 53, contacts: {8: 71}},
        {name: 'Кислород', img: 'oxygen.png', id: 54, contacts: {52: 55}},
        {name: 'Водород', img: 'hydrogen.png', id: 55, contacts: {}},
        {name: 'Водоросли', img: 'algae.png', id: 56, contacts: {0: 86, 58: 142}},
        {name: 'Червь', img: 'worm.png', id: 57, contacts: {1: 58, 3: 125, 0: 234}},
        {name: 'Рыба', img: 'fish.png', id: 58, contacts: {0: 59, 5: 64, 69: 104, 68: 176, 58: 194}},
        {name: 'Амфибия', img: 'tadpole.png', id: 59, contacts: {18: 60, 3: 61, 22: 63}},
        {name: 'Лягушка', img: 'frog.png', id: 60, contacts: {37: 65}},
        {name: 'Птица', img: 'bird.png', id: 61, contacts: {61: 62, 68: 266, 69: 266}},
        {name: 'Яйца', img: 'eggs.png', id: 62, contacts: {2: 72, 10: 177}},
        {name: 'Крокодил', img: 'crocodile.png', id: 63, contacts: {133: 217}},
        {name: 'Кит', img: 'whale.png', id: 64, contacts: {74: 149, 0:237}},
        {name: 'Грызун', img: 'rat.png', id: 65, contacts: {21: 66, 68: 107, 69: 107}},
        {name: 'Обезьяна', img: 'monkey.png', id: 66, contacts: {66: 67, 58: 106}},
        {name: 'Австралопитек', img: 'australopithecus.png', id: 67, contacts: {22: 68, 17: 69}},
        {name: 'Мужчина', img: 'boy.png', id: 68, contacts: {69: 70, 74: 82, 44: 91, 2: 121, 200: 235}},
        {name: 'Женщина', img: 'girl.png', id: 69, contacts: {74: 82, 44: 91, 43: 99, 200: 235}},
        {name: 'Ребёнок', img: 'child.png', id: 70, contacts: {}},
        {name: 'Лава-лампа', img: 'lava-lamp.png', id: 71, contacts: {}},
        {name: 'Яичница', img: 'egg.png', id: 72, contacts: {}},
        {name: 'Оружие', img: 'weapon.png', id: 73, contacts: {68: 90}},
        {name: 'Нож', img: 'knife.png', id: 74, contacts: {21: 23, 58: 75, 61: 79, 74: 219}},
        {name: 'Мясо рыбы', img: 'fishKnife.png', id: 75, contacts: {38: 76}},
        {name: 'Рыбное блюдо', img: 'fishReady.png', id: 76, contacts: {}},
        {name: 'Мука', img: 'flour.png', id: 77, contacts: {1: 78}},
        {name: 'Тесто', img: 'dough.png', id: 78, contacts: {38: 80, 79: 269}},
        {name: 'Мясо', img: 'meat.png', id: 79, contacts: {38: 81}},
        {name: 'Хлеб', img: 'bread.png', id: 80, contacts: {81: 116, 44: 171}},
        {name: 'Стейк', img: 'steak.png', id: 81, contacts: {}},
        {name: 'Смерть', img: 'dead.png', id: 82, contacts: {61: 83, 39: 145, 9: 187}},
        {name: 'Птеродактиль', img: 'pterodactyl.png', id: 83, contacts: {2: 84}},
        {name: 'Дракон', img: 'dragon.png', id: 84, contacts: {84: 85}},
        {name: 'Горыныч', img: 'gor.png', id: 85, contacts: {}},
        {name: 'Грибы', img: 'mushroom.png', id: 86, contacts: {}},
        {name: 'Уголь', img: 'coal.png', id: 87, contacts: {26: 88, 6:136, 68: 265}},
        {name: 'Двигатель', img: 'motor.png', id: 88, contacts: {52: 89}},
        {name: 'Эл. Двигатель', img: 'engine.png', id: 89, contacts: {26: 101}},
        {name: 'Солдат', img: 'soldier.png', id: 90, contacts: {90: 98}},
        {name: 'Врач', img: 'doctor.png', id: 91, contacts: {92: 93}},
        {name: 'Здание', img: 'building.png', id: 92, contacts: {92: 94, 170: 199}},
        {name: 'Больница', img: 'hospital.png', id: 93, contacts: {}},
        {name: 'Город', img: 'city.png', id: 94, contacts: {94: 165}},
        {name: 'Бедствие', img: 'disaster.png', id: 95, contacts: {0: 96, 4: 97}},
        {name: 'Землетрясение', img: 'earthquake.png', id: 96, contacts: {}},
        {name: 'Торнадо', img: 'tornado.png', id: 97, contacts: {}},
        {name: 'Война', img: 'war.png', id: 98, contacts: {}},
        {name: 'Ведьма', img: 'witch.png', id: 99, contacts: {}},
        {name: 'Верблюд', img: 'camel.png', id: 100, contacts: {132: 133}},
        {name: 'Машина', img: 'car.png', id: 101, contacts: {3: 102, 73: 105, 1: 111}},
        {name: 'Самолёт', img: 'airplane.png', id: 102, contacts: {}},
        {name: 'Статуя', img: 'statue.png', id: 103, contacts: {}},
        {name: 'Русалка', img: 'mermaid.png', id: 104, contacts: {}},
        {name: 'Танк', img: 'tank.png', id: 105, contacts: {}},
        {name: 'Кот', img: 'cat.png', id: 106, contacts: {20: 128}},
        {name: 'Белка Хакка', img: 'degu.png', id: 107, contacts: {}},
        {name: 'Лёд', img: 'ice.png', id: 108, contacts: {108: 109, 61: 110}},
        {name: 'Айсберг', img: 'iceberg.png', id: 109, contacts: {109: 228}},
        {name: 'Пингвин', img: 'penguin.png', id: 110, contacts: {}},
        {name: 'Корабль', img: 'ship.png', id: 111, contacts: {90: 112, 5: 267}},
        {name: 'Пираты', img: 'pirates.png', id: 112, contacts: {11: 113}},
        {name: 'Сокровище', img: 'chest.png', id: 113, contacts: {114: 115}},
        {name: 'Ключ', img: 'key.png', id: 114, contacts: {40: 255}},
        {name: 'Золото', img: 'gold.png', id: 115, contacts: {}},
        {name: 'Сендвич', img: 'sandwich.png', id: 116, contacts: {}},
        {name: 'Континент', img: 'continent.png', id: 117, contacts: {117: 118}},
        {name: 'Планета', img: 'earth.png', id: 118, contacts: {23: 119, 2: 170}},
        {name: 'Глобус', img: 'globe.png', id: 119, contacts: {}},
        {name: 'Фейерверк', img: 'fireworks.png', id: 120, contacts: {}},
        {name: 'Пожарный', img: 'fireman.png', id: 121, contacts: {}},
        {name: 'Цветок', img: 'flower.png', id: 122, contacts: {21: 130}},
        {name: 'Пчёлы', img: 'beehive.png', id: 123, contacts: {123: 124, 33: 146}},
        {name: 'Мёд', img: 'honey.png', id: 124, contacts: {}},
        {name: 'Бабочка', img: 'butterfly.png', id: 125, contacts: {122: 123}},
        {name: 'Бумага', img: 'copy.png', id: 126, contacts: {115: 127, 69: 161, 68: 161}},
        {name: 'Деньги', img: 'money.png', id: 127, contacts: {92: 232}},
        {name: 'Валериана', img: 'valer.png', id: 128, contacts: {}},
        {name: 'Баня', img: 'sauna.png', id: 129, contacts: {165: 220}},
        {name: 'Яблоко', img: 'apple.png', id: 130, contacts: {6: 143, 160: 231}},
        {name: 'Зеркало', img: 'mirror.png', id: 131, contacts: {}},
        {name: 'Лес', img: 'forest.png', id: 132, contacts: {101: 250}},
        {name: 'Медведь', img: 'bear.png', id: 133, contacts: {2: 229, 49: 134, 36: 152, 106: 198, 21: 241}},
        {name: 'Россия', img: 'russia.png', id: 134, contacts: {}},
        {name: 'Лодка', img: 'boat.png', id: 135, contacts: {}},
        {name: 'Алмаз', img: 'diamond.png', id: 136, contacts: {6: 137, 24: 197}},
        {name: 'Графит', img: 'graphite.png', id: 137, contacts: {23: 138}},
        {name: 'Карандаш', img: 'pencil.png', id: 138, contacts: {126: 139}},
        {name: 'Письмена', img: 'essay.png', id: 139, contacts: {139: 140}},
        {name: 'Книга', img: 'book.png', id: 140, contacts: {69: 141, 68: 160, 140: 172, 52: 222}},
        {name: 'Писатель', img: 'writer.png', id: 141, contacts: {}},
        {name: 'Суши', img: 'sushi.png', id: 142, contacts: {}},
        {name: 'Сок', img: 'juice.png', id: 143, contacts: {}},
        {name: 'Кактус', img: 'cactus.png', id: 144, contacts: {24: 251}},
        {name: 'Гроб', img: 'coffin.png', id: 145, contacts: {}},
        {name: 'Скорпион', img: 'scorpion.png', id: 146, contacts: {1: 147, 24: 223}},
        {name: 'Рак', img: 'cray.png', id: 147, contacts: {}},
        {name: 'Бобёр', img: 'beaver.png', id: 148, contacts: {}},
        {name: 'Кровь', img: 'blood.png', id: 149, contacts: {57: 150}},
        {name: 'Пиявка', img: 'leech.png', id: 150, contacts: {68: 151, 69: 151}},
        {name: 'Терапия', img: 'therapy.png', id: 151, contacts: {}},
        {name: 'Корова', img: 'cow.png', id: 152, contacts: {68: 153, 69: 153}},
        {name: 'Молоко', img: 'milk.png', id: 153, contacts: {19: 154}},
        {name: 'Кефир', img: 'kefir.png', id: 154, contacts: {153: 155}},
        {name: 'Творог', img: 'tvorog.png', id: 155, contacts: {38: 156}},
        {name: 'Сыр', img: 'cheese.png', id: 156, contacts: {38: 157, 78: 158 }},
        {name: 'Фондю', img: 'fondue.png', id: 157, contacts: {}},
        {name: 'Пицца', img: 'pizza.png', id: 158, contacts: {}},
        {name: 'Часы', img: 'timer.png', id: 159, contacts: {}},
        {name: 'Учёный', img: 'scientist.png', id: 160, contacts: {162: 174}},
        {name: 'Игра', img: 'favicon.png', id: 161, contacts: {}},
        {name: 'Ноутбук', img: 'macbook.png', id: 162, contacts: {68: 163, 69: 163, 138: 230}},
        {name: 'Нейросеть', img: 'neural.png', id: 163, contacts: {89: 164}},
        {name: 'Робот', img: 'droid.png', id: 164, contacts: {}},
        {name: 'Страна', img: 'country.png', id: 165, contacts: {159: 166, 142: 167, 158: 168, 84: 169}},
        {name: 'Щвейцария', img: 'switzerland.png', id: 166, contacts: {68: 183, 69: 183}},
        {name: 'Япония', img: 'japan.png', id: 167, contacts: {68: 183, 69: 183}},
        {name: 'Италия', img: 'italy.png', id: 168, contacts: {68: 183, 69: 183}},
        {name: 'Китай', img: 'china.png', id: 169, contacts: {68: 183, 69: 183}},
        {name: 'Солнце', img: 'sun.png', id: 170, contacts: {122: 196, 13: 246}},
        {name: 'Пиво', img: 'beer.png', id: 171, contacts: {}},
        {name: 'Библиотека', img: 'bookcase.png', id: 172, contacts: {}},
        {name: 'Рок', img: 'rock.png', id: 173, contacts: {234: 243}},
        {name: 'Интернет', img: 'www.png', id: 174, contacts: {}},
        {name: 'Минералка', img: 'mineral-water.png', id: 175, contacts: {}},
        {name: 'Рыбак', img: 'fishing.png', id: 176, contacts: {}},
        {name: 'Ящерица', img: 'lizard.png', id: 177, contacts: {}},
        {name: 'Торф', img: 'turf.png', id: 178, contacts: {44: 179}},
        {name: 'Виски', img: 'whisky.png', id: 179, contacts: {165: 221}},
        {name: 'Дорога', img: 'road1.png', id: 180, contacts: {180: 181, 7: 192}},
        {name: 'Дорога', img: 'road2.png', id: 181, contacts: {7: 192}},
        {name: 'Алкоголик', img: 'alcoholic.png', id: 182, contacts: {}},
        {name: 'Переводчик', img: 'interpreter.png', id: 183, contacts: {}},
        {name: 'Виноград', img: 'grape.png', id: 184, contacts: {49: 185}},
        {name: 'Вино', img: 'wine.png', id: 185, contacts: {}},
        {name: 'Ракушка', img: 'seashell.png', id: 186, contacts: {57: 193}},
        {name: 'Могила', img: 'grave.png', id: 187, contacts: {187: 188, 68: 189, 69: 189}},
        {name: 'Кладбище', img: 'graveyard.png', id: 188, contacts: {}},
        {name: 'Зомби', img: 'zombie.png', id: 189, contacts: {}},
        {name: 'Табак', img: 'cannabis.png', id: 190, contacts: {126: 191}},
        {name: 'Сигарета', img: 'cigar.png', id: 191, contacts: {}},
        {name: 'Паровоз', img: 'locomotive.png', id: 192, contacts: {89: 268}},
        {name: 'Улитка', img: 'snail.png', id: 193, contacts: {}},
        {name: 'Икра', img: 'caviar.png', id: 194, contacts: {}},
        {name: 'Луна', img: 'moon.png', id: 195, contacts: {170: 218}},
        {name: 'Подсолнух', img: 'sunflower.png', id: 196, contacts: {}},
        {name: 'Бриллиант', img: 'brilliant.png', id: 197, contacts: {}},
        {name: 'Собака', img: 'dog.png', id: 198, contacts: {}},
        {name: 'Маяк', img: 'lighthouse.png', id: 199, contacts: {}},
        {name: 'Свинья', img: 'pig.png', id: 200, contacts: {65: 201, 68: 214, 24: 214}},
        {name: 'Свинка', img: 'guinea-pig.png', id: 201, contacts: {}},
        {name: 'Пирог', img: 'pie.png', id: 202, contacts: {}},
        {name: 'Шоколад', img: 'chocolate.png', id: 203, contacts: {202: 204}},
        {name: 'Брауни', img: 'brownie.png', id: 204, contacts: {}},
        {name: 'Резистор', img: 'resistor.png', id: 205, contacts: {205: 206}},
        {name: 'Микросхема', img: 'chip.png', id: 206, contacts: {205: 207, 52: 208, 35: 262}},
        {name: 'Процессор', img: 'cpu.png', id: 207, contacts: {}},
        {name: 'Телефон', img: 'phone.png', id: 208, contacts: {130: 209}},
        {name: 'Айфон', img: 'iphone.png', id: 209, contacts: {}},
        {name: 'Космос', img: 'cosmos.png', id: 210, contacts: {}},
        {name: 'Чёрная дыра', img: 'galaxy.png', id: 211, contacts: {}},
        {name: 'Грипп', img: 'influenza.png', id: 212, contacts: {}},
        {name: 'Египет', img: 'egypt.png', id: 213, contacts: {}},
        {name: 'Жир', img: 'trans-fat.png', id: 214, contacts: {153: 215, 214: 216}},
        {name: 'Масло', img: 'butter.png', id: 215, contacts: {}},
        {name: 'Мыло', img: 'soap.png', id: 216, contacts: {}},
        {name: 'Зоопарк', img: 'zoo.png', id: 217, contacts: {}},
        {name: 'Затмение', img: 'eclipse.png', id: 218, contacts: {}},
        {name: 'Ножницы', img: 'scissors.png', id: 219, contacts: {}},
        {name: 'Финляндия', img: 'finland.png', id: 220, contacts: {}},
        {name: 'Шотландия', img: 'scotland.png', id: 221, contacts: {}},
        {name: 'Эл. книга', img: 'ebook.png', id: 222, contacts: {}},
        {name: 'Яд', img: 'poison2.png', id: 223, contacts: {73: 224}},
        {name: 'Атом. оружие', img: 'nuclear.png', id: 224, contacts: {}},
        {name: 'Река', img: 'river.png', id: 225, contacts: {226: 227}},
        {name: 'Гора', img: 'mountain.png', id: 226, contacts: {}},
        {name: 'Пейзаж', img: 'landscape.png', id: 227, contacts: {}},
        {name: 'Ледник', img: 'glacier.png', id: 228, contacts: {}},
        {name: 'Лесной пожар', img: 'wildfire.png', id: 229, contacts: {}},
        {name: 'Фотошоп', img: 'photoshop.png', id: 230, contacts: {}},


        {name: 'Ньютон', img: 'newton.png', id: 231, contacts: {}},
        {name: 'Банк', img: 'bank.png', id: 232, contacts: {24: 254}},
        {name: 'Бассейн', img: 'pool.png', id: 233, contacts: {}},
        {name: 'Жук', img: 'beatle.png', id: 234, contacts: {235: 236}},
        {name: 'Мусор', img: 'trash.png', id: 235, contacts: {}},
        {name: 'Таракан', img: 'cockroach.png', id: 236, contacts: {}},
        {name: 'Слон', img: 'elephant.png', id: 237, contacts: {}},
        {name: 'Звезда', img: 'star.png', id: 238, contacts: {237: 239}},
        {name: 'Пришелец', img: 'alien.png', id: 239, contacts: {}},
        {name: 'Аквариум', img: 'aquarium.png', id: 240, contacts: {}},
        {name: 'Панда', img: 'panda.png', id: 241, contacts: {20: 242}},
        {name: 'Бамбук', img: 'bamboo.png', id: 242, contacts: {242: 244}},
        {name: 'Битлз', img: 'music.png', id: 243, contacts: {}},
        {name: 'Верёвка', img: 'rope.png', id: 244, contacts: {234: 245}},
        {name: 'Паук', img: 'spider.png', id: 245, contacts: {}},
        {name: 'Радуга', img: 'rainbow.png', id: 246, contacts: {68: 247, 69: 247}},
        {name: 'Лепрекон', img: 'leprechaun.png', id: 247, contacts: {}},
        {name: 'Ангел', img: 'angel.png', id: 248, contacts: {2: 249}},
        {name: 'Демон', img: 'damon.png', id: 249, contacts: {}},
        {name: 'Джип', img: 'jeep.png', id: 250, contacts: {}},
        {name: 'Иголка', img: 'needle.png', id: 251, contacts: {65: 252, 68: 253, 69: 253}},
        {name: 'Ёж', img: 'hedgehog.png', id: 252, contacts: {}},
        {name: 'Йог', img: 'guru.png', id: 253, contacts: {}},
        {name: 'Калькулятор', img: 'calculator.png', id: 254, contacts: {}},
        {name: 'Замок', img: 'lock.png', id: 255, contacts: {251: 256}},
        {name: 'Отмычка', img: 'crowbar.png', id: 256, contacts: {}},
        {name: 'Снег', img: 'snow.png', id: 257, contacts: {65: 261, 68: 258, 69: 258, 257: 259}},
        {name: 'Снеговик', img: 'snowman.png', id: 258, contacts: {}},
        {name: 'Зима', img: 'winter.png', id: 259, contacts: {68: 260}},
        {name: 'Дед Мороз', img: 'christmas.png', id: 260, contacts: {}},
        {name: 'Заяц', img: 'hare.png', id: 261, contacts: {}},
        {name: 'Камера', img: 'camera.png', id: 262, contacts: {68: 263, 69: 263}},
        {name: 'Кино', img: 'movie.png', id: 263, contacts: {92: 264}},
        {name: 'Кинотеатр', img: 'cinema.png', id: 264, contacts: {}},
        {name: 'Шахтёр', img: 'miner.png', id: 265, contacts: {}},
        {name: 'Курица', img: 'chicken.png', id: 266, contacts: {}},
        {name: 'Яхта', img: 'yacht.png', id: 267, contacts: {}},
        {name: 'Поезд', img: 'train.png', id: 268, contacts: {}},
        {name: 'Пельмени', img: 'dumplings.png', id: 269, contacts: {}},
    ];
    // let strMain = '<ul>';
    // for(let i = 4; i < ELEMENTS.length; i++){
    //     let str = '<li>' + ELEMENTS[i].name + ' = ';
    //     let id = ELEMENTS[i].id;
    //     for(let q = 0; q < ELEMENTS.length; q++){
    //         let keys = Object.keys(ELEMENTS[q].contacts);
    //         let isBreak = false;
    //         for(let z = 0; z < keys.length; z++){
    //             if(ELEMENTS[q].contacts[keys[z]] === id){
    //                 console.log('str');
    //                 str += ELEMENTS[q].name + ' + ' + ELEMENTS[keys[z]].name + '</li>';
    //                 isBreak = true;
    //                 break;
    //             }
    //         }
    //         if(isBreak) break;
    //     }
    //     strMain += str;
    // }
    //
    // strMain += '</ul>';
    // localStorage.setItem('ds114cad', strMain);
    let localMyElements = localStorage.getItem('myElements');
    let localMapElements = localStorage.getItem('mapElements');
    let mapElements = localMapElements ?  JSON.parse(localMapElements): [];
    let got = document.querySelector('.gotEl');
    let gottenElements = document.querySelector('.gottenElements2');
    let myElements =  localMyElements ? localMyElements.split(',') : [0,1,2,3];
    let thatElement = 5;
    function getNextElement(){
        for(let i = 0; i < ELEMENTS.length; i++){
            if(!myElements.includes(i)){
                let canGet = canGetElement(i);
                if(!canGet) continue;
                thatElement = i;
                return ELEMENTS[i].name;
            }
        }
        return 'Победа!';
    }
    function canGetElement(id) {
        for(let i = 0; i < myElements.length; i++){
            for(let key in ELEMENTS[myElements[i]].contacts){
                if (!myElements.includes(Number(key))) continue;
                if(ELEMENTS[myElements[i]].contacts[key] === id){
                    return [myElements[i], key];
                }
            }
        }
        return false;
    }
    if(localMyElements){
        myElements = myElements.map(e=>Number(e));
    }
    let gotTipGot = document.querySelector('.got .tipGot');
    let gotElTipGot = document.querySelector('.gottenElements .tipGot');
    got.onclick = function(){
      gotTipGot.classList.toggle('none');
        gotElTipGot.classList.add('none');
    };
    gottenElements.onclick = function(){
        gotElTipGot.classList.toggle('none');
        gotTipGot.classList.add('none');
    };
    changeGot();
    function changeGot() {
        got.innerText = getNextElement();
        gottenElements.innerText = myElements.length +'/'+ ELEMENTS.length;
    }
    const tableSelector = document.querySelector(".table");
    const iconsList = document.querySelector(".icons");
    const iconSize = 50

    ;
    let iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    if(iOS){
        document.documentElement.addEventListener('gesturestart', function (event) {
            event.preventDefault();
        }, false);
    }
    ww = (iOS) ? screen.width : window.outerWidth;
    wh = (iOS) ? screen.height : window.outerHeight;
    window.onresize = function () {
        ww = (iOS) ? screen.width : window.outerWidth;
        wh = (iOS) ? screen.height : window.outerHeight;
    };

    //Если первая игра, выдаём 4 элемента
    if(!localMapElements){
        newGame();
    }else{
        mapElements.forEach((el, index)=>{
            if(el === null) return;
            addElementToTable(ELEMENTS[Number(el.id)],
                Number(el.x.substr(0, el.x.indexOf('px'))),
                Number(el.y.substr(0, el.y.indexOf('px'))),
                index)
        });
    }
    addAllElementsToList();
    function newGame(){
        changeGot();
        addElementToTable(ELEMENTS[0], ww/2-iconSize*2, wh/2-iconSize*2.5);
        addElementToTable(ELEMENTS[1], ww/2+iconSize, wh/2-iconSize*2.5);
        addElementToTable(ELEMENTS[3], ww/2-iconSize*0.5, wh/2-iconSize*4);
        addElementToTable(ELEMENTS[2], ww/2-iconSize*0.5, wh/2-iconSize);
    }
    //Соединить элементы
    function connectElements(el1, el2) {
        let n1 = Number(el1.getAttribute('data-id'));
        let n2 = Number(el2.getAttribute('data-id'));
        let newEl = ELEMENTS[n1].contacts[n2] || ELEMENTS[n2].contacts[n1];
        //Соединяем координаты двух элементов и делим пополам
        let x = (Number(
            el1.style.left.substr(0, el1.style.left.indexOf('px') ) )
            + Number(el2.style.left.substr(0, el2.style.left.indexOf('px'))) )/2;
        let y = (Number(el1.style.top.substr(0, el1.style.top.indexOf('px')))
            + Number(el2.style.top.substr(0, el2.style.top.indexOf('px'))))/2;
        if(newEl){
            addElementToTable(ELEMENTS[newEl], x, y);
            //Удалить скрещенные элементы
            deleteElement(el1);
            deleteElement(el2);
            //Если элемента нет в коллекции, добавить его
            if(!myElements.includes(newEl)){
                myElements.push(newEl);
                setElements();
                addElementToList(ELEMENTS[newEl]);
                changeGot();
                addRecipe(newEl);
                if(myElements.length === ELEMENTS.length){
                    got.innerText = 'Вы открыли все элементы! Поздравляем! Вы можете начать новую игру или построить красивые картинки из созданных элементов!';
                }
            }
            return true;
        }
        return false;

    }
    function setElements() {

        if(playerGame){
            playerGame.setData({
                'elements': myElements
            }).then(() => {
            });
        }
        localStorage.setItem('myElements', myElements);
    }
    //Удалить элемент
    function deleteElement(el) {
        let id = el.getAttribute('data-map-id');
        if(id){
            mapElements[id] = null;
            localStorage.setItem('mapElements', mapElements);
        }
        el.remove();
    }
    //Добавление элемента на поле
    function addElementToTable(el, x, y) {
        let div = createElement(el);
        //При условии переданной позиции элемента
        if(y) div.style.top = y + 'px';
        else div.style.top = wh / 2.2 + 'px';
        if(x) div.style.left = x + 'px';
        else div.style.left = ww / 2.2 + 'px';
        dragElement(div);
        let isPhone =  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        if(isPhone){
            var touchtime = 0;
            div.onclick =  function() {
                if (touchtime === 0) {
                    touchtime = new Date().getTime();
                } else {
                    if (((new Date().getTime()) - touchtime) < 500) {
                        doublelement(el, this);
                        touchtime = 0;
                    } else {
                        touchtime = new Date().getTime();
                    }
                }
            };
        }else{
            div.ondblclick = function(){
                doublelement(el, this);
            };
        }
        // setIconToMap(div);
        tableSelector.append(div);
    }
    //Дублировать элемент при двойном нажатии
    function doublelement(el, that) {
        let x = Number(that.style.left.substr(0, that.style.left.indexOf('px')));
        let y = Number(that.style.top.substr(0, that.style.top.indexOf('px')));
        addElementToTable(el, x-10, y-5);
    }
    function createElement(el) {
        let div = document.createElement('div');
        div.classList.add('icon');
        div.setAttribute('data-id', el.id);
        let p = document.createElement('p');
        p.classList.add('desc');
        p.innerText = el.name;
        div.append(p);
        div.style.background = 'url(images/' + el.img + ') center center no-repeat';
        return div;
    }
    const map = {
        'q' : 'й', 'w' : 'ц', 'e' : 'у', 'r' : 'к', 't' : 'е', 'y' : 'н', 'u' : 'г', 'i' : 'ш', 'o' : 'щ', 'p' : 'з', '[' : 'х', ']' : 'ъ', 'a' : 'ф', 's' : 'ы', 'd' : 'в', 'f' : 'а', 'g' : 'п', 'h' : 'р', 'j' : 'о', 'k' : 'л', 'l' : 'д', ';' : 'ж', '\'' : 'э', 'z' : 'я', 'x' : 'ч', 'c' : 'с', 'v' : 'м', 'b' : 'и', 'n' : 'т', 'm' : 'ь', ',' : 'б', '.' : 'ю','Q' : 'Й', 'W' : 'Ц', 'E' : 'У', 'R' : 'К', 'T' : 'Е', 'Y' : 'Н', 'U' : 'Г', 'I' : 'Ш', 'O' : 'Щ', 'P' : 'З', '[' : 'Х', ']' : 'Ъ', 'A' : 'Ф', 'S' : 'Ы', 'D' : 'В', 'F' : 'А', 'G' : 'П', 'H' : 'Р', 'J' : 'О', 'K' : 'Л', 'L' : 'Д', ';' : 'Ж', '\'' : 'Э', 'Z' : '?', 'X' : 'ч', 'C' : 'С', 'V' : 'М', 'B' : 'И', 'N' : 'Т', 'M' : 'Ь', ',' : 'Б', '.' : 'Ю'
    };
    let findInput = document.querySelector('.iconsHead input');
    //Поиск по элементам
    findInput.oninput = findElement;
    window.onkeydown = function(e) {
        if(!icons.classList.contains('none') && !findInput.focused){
            findInput.focus();
        }
    };
    function findElement() {
        let text = findInput.value.split('').reduce((acc, e)=>{
            if(map[e]) return acc + map[e];
            return acc + e;
        }, '');
        findInput.value = text;
        deleteAllMenuElements();
        for(let i = 0; i < myElements.length; i++){
            if(ELEMENTS[myElements[i]].name.toLowerCase().includes(text.toLowerCase())){
                addElementToList(ELEMENTS[myElements[i]]);
            }
        }
    }
    //Элементы в меню
    let addIcons = document.querySelector('.addIcons');
    let wwc = ww / 2.2;
    let whc = wh / 2.2;
    let elementsOnTable = [];
    elementsOnTable[0] = [wwc, whc];
    elementsOnTable[1] = [wwc+40, whc+40];
    elementsOnTable[2] = [wwc-40, whc+40];
    elementsOnTable[3] = [wwc+40, whc-40];
    elementsOnTable[4] = [wwc-40, whc-40];
    elementsOnTable[5] = [wwc, whc-60];
    elementsOnTable[6] = [wwc, whc+60];
    elementsOnTable[7] = [wwc+60, whc];
    elementsOnTable[8] = [wwc-60, whc];
    elementsOnTable[9] = [wwc+80, whc+80];
    elementsOnTable[10] = [wwc+80, whc-80];
    elementsOnTable[11] = [wwc-80, whc+80];
    elementsOnTable[12] = [wwc-80, whc-80];
    elementsOnTable[13] = [wwc, whc-120];
    elementsOnTable[14] = [wwc, whc+120];
    elementsOnTable[15] = [wwc+120, whc];
    elementsOnTable[16] = [wwc-120, whc];
    elementsOnTable[17] = [wwc, whc+180];
    elementsOnTable[18] = [wwc, whc-180];
    addIcons.onclick = function() {
        if(selectedIcons.length === 0) return;
        if(showAdv && advTime){
            showAdv(false);
        };
        for(let i = 0; i < selectedIcons.length; i++){
            let index = i < elementsOnTable.length ? i : i % elementsOnTable.length;
            let x = elementsOnTable[index] ? elementsOnTable[index][0] : wwc;
            let y = elementsOnTable[index] ? elementsOnTable[index][1] : whc;
            addElementToTable(ELEMENTS[selectedIcons[i]], x, y);
        }
        toggleIconsMenu();
        removeBackground2();
    };
    document.querySelector('.icons .close').onclick = function() {
        removeBackground2();
        icons.classList.add('none');
    };
    //Удалить все элементы в меню
    function deleteAllMenuElements() {
        document.querySelectorAll('.iconMenu').forEach((e)=>{
            e.remove();
        });
    }
    //Добавить элементы в свой набор
    function addAllElementsToList(){
        selectedIcons = [];
        deleteAllMenuElements();
        myElements.forEach((num)=>{
            addElementToList(ELEMENTS[num]);
        });
    }
    document.querySelector('.add').onclick = function(){
        toggleIconsMenu();
        setBlackout2();
    };
    let icons = document.querySelector('.icons');
    function toggleIconsMenu(){
        if(!icons.classList.contains('none')){
            findInput.value = '';
            addAllElementsToList();
        }
        icons.classList.toggle('none');
    }
    function addElementToList(el) {
        let div = createElement(el);
        div.classList.add('iconMenu');
        let num = Number(div.getAttribute('data-id'));
        if(selectedIcons.includes(num)){
            div.classList.add('selectedIcon');
        }
        div.onclick = function(){
            if(selectedIcons.includes(num)){
                div.classList.remove('selectedIcon');
                selectedIcons.splice(selectedIcons.indexOf(num), 1);
            }else{
                selectedIcons.push(num);
                div.classList.add('selectedIcon');
            }

        };
        iconsList.append(div);
    }
    /*Рецепты*/
    let recipes = document.querySelector('.recipes');
    function getRecipes() {
        let allRecipes = document.querySelectorAll('.recipe');
        for(let i = 0; i < allRecipes.length; i++){
            allRecipes[i].remove();
        }
        for(let i = 4; i < myElements.length; i++){
            addRecipe(myElements[i]);
        }
    }
    getRecipes();
    //Добавить рецепт
    function getRecipeDiv(num) {
        let recipe = canGetElement(num);
        if(!recipe) return null;
        recipe.push(num);
        let div = document.createElement('div');
        div.classList.add('recipe');
        let div1 = createElement(ELEMENTS[recipe[0]]);
        let div2 = createElement(ELEMENTS[recipe[1]]);
        let eq = createElement(ELEMENTS[recipe[2]]);
        div1.classList.add('iconRecipe');
        div2.classList.add('iconRecipe');
        eq.classList.add('iconRecipe');
        let spanPlus = document.createElement('span');
        spanPlus.classList.add('recipeSpan');
        spanPlus.innerText = ' + ';
        let spanEq = document.createElement('span');
        spanEq.classList.add('recipeSpan');
        spanEq.innerText = ' = ';
        div.append(div1, spanPlus, div2, spanEq, eq);
        return div;
    }

    function addRecipe(num) {
        const div = getRecipeDiv(num);
        if(div === null) return;
        recipes.append(div);
    }
    /*Элементы на поле*/
    window.onblur = setAllIconsToMap;
    window.onbeforeunload = setAllIconsToMap;
    window.onpagehide = setAllIconsToMap;
    function setAllIconsToMap() {
        let iconsTable = document.querySelectorAll('.icon:not(.iconMenu):not(.iconRecipe)');
        mapElements = [];
        iconsTable.forEach((e)=>{
            setIconToMap(e);
        });
        localStorage.setItem('mapElements', JSON.stringify(mapElements));
    }
    function setIconToMap(el) {
        let num = el.getAttribute('data-id');
        mapElements.push({id: num, x: el.style.left, y: el.style.top});
    }

    /*Перетаскивание элементов*/
    function dragElement(el) {
        let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        el.onmousedown = dragMouseDown;
        el.ontouchstart = dragMouseDown;
        function dragMouseDown(e) {
            let cx = e.clientX || e.changedTouches[0].clientX;
            let cy = e.clientY || e.changedTouches[0].clientY;
            pos3 = cx;
            pos4 = cy;
            document.onmouseup = closeDragElement;
            document.ontouchend = closeDragElement;
            document.onmousemove = elementDrag;
            document.ontouchmove = elementDrag;
        }
        function elementDrag(e) {
            let cx = e.clientX || e.changedTouches[0].clientX;
            let cy = e.clientY || e.changedTouches[0].clientY;
            pos1 = pos3 - cx;
            pos2 = pos4 - cy;
            pos3 = cx;
            pos4 = cy;
            el.style.top = (el.offsetTop - pos2) + "px";
            el.style.left = (el.offsetLeft - pos1) + "px";
            let eg = el.getBoundingClientRect();
            if(eg.x + eg.width > ww){
                el.style.left = (el.offsetLeft - pos1 + (ww - eg.x - eg.width)) + "px";
            }else if(eg.x < 0){
                el.style.left = (el.offsetLeft - pos1 - eg.x) + "px";
            }
            const g = document.body.getBoundingClientRect();
            let minus = 0;
            if(ww > 1200) minus = 50;
            if(eg.y + eg.height > wh-minus){
                el.style.top = (el.offsetTop - pos2 + (wh-minus - eg.y - eg.height + g.y)) + "px";
            }else if(eg.y < 0){
                el.style.top = (el.offsetTop - pos2 - eg.y) + "px";
            }
        }
        function closeDragElement(e) {
            el.hidden = true;
            let cx = e.clientX || e.changedTouches[0].clientX;
            let cy = e.clientY || e.changedTouches[0].clientY;
            let elBellow = document.elementFromPoint(cx, cy);
            if(elBellow){
                if(elBellow.classList.contains('icon')){
                    connectElements(el, elBellow);
                }else if(elBellow.classList.contains('drop')){
                    deleteElement(el);
                }
            }
            if(el){
                el.hidden = false;
            }
            document.onmouseup = null;
            document.ontouchend = null;
            document.onmousemove = null;
            document.ontouchmove = null;
        }
    }
    //Нажатие по корзине - удаление всего
    document.querySelector('.drop').onclick = function(){
        if(showAdv && advTime){
            showAdv(false);
        }
        let iconsTable = document.querySelectorAll('.icon:not(.iconMenu):not(.iconRecipe)');
        iconsTable.forEach((e)=>{
            e.remove();
        });
    };

    let rules = document.querySelector('.rules');
    let caution = document.querySelector('.caution');
    let black = document.querySelector('.blackout');

    document.querySelector('.info').onclick = function() {
        if(showAdv && advTime){
            showAdv(false);
        }
        setBlackout2();
        openInfo();
    };
    document.querySelector('.recipeButton').onclick = function() {
        if(showAdv && advTime){
            showAdv(false);
        }
        setBlackout2();
        recipes.classList.toggle('none');
    };
    let blackout2 = document.querySelector('.blackout2');
    //Первый заход в игру
    if(myElements.length === 4){
        openInfo();
        setBlackout2();
    }
    function openInfo(){

        rules.classList.toggle('none');
        caution.classList.add('none');
        black.classList.add('none');
    }
    document.querySelector('.close').onclick = function() {
        removeBackground2();
        rules.classList.add('none');
    };
    document.querySelector('.closeRules').onclick = function(){
        removeBackground2();
        recipes.classList.add('none');
    };
    document.getElementById('delete').onclick = function() {
      caution.classList.remove('none');
      black.classList.remove('none');
        black.style.height = document.querySelector('.rules').scrollWidth + 'px';
    };

    function setBlackout2(){
        blackout2.classList.remove('none');
    }
    function removeBackground2(){
        blackout2.classList.add('none');
        rules.classList.add('none');
        icons.classList.add('none');
        recipes.classList.add('none');
        document.querySelector('.getElement').classList.add('none');
    }
    blackout2.onclick = removeBackground2;
    //Удаление всего прогресса игры
    document.getElementById('deleteCertain').onclick = function() {
        removeBackground2();
        caution.classList.add('none');
        black.classList.add('none');
        rules.classList.add('none');
        let icons = document.querySelectorAll('.icon');
        icons.forEach((e)=>{e.remove()});
        let recipes = document.querySelectorAll('.recipe');
        recipes.forEach((e)=>{e.remove()});
        localStorage.removeItem('myElements');
        localStorage.removeItem('mapElements');
        myElements = [0,1,2,3];
        if(playerGame){
            playerGame.setData({
                'elements': myElements
            }).then(() => {
            });
        }
        localStorage.setItem('myElements', myElements);
        newGame();
        addAllElementsToList();
    };
    document.getElementById('notDelete').onclick = function() {
        caution.classList.add('none');
        black.classList.add('none');
    };
    //Предзагрузка изображений
    try{
        for(let i = 0; i < ELEMENTS.length; i++){
            new Promise(function() {
                new Image().src= 'images/' + ELEMENTS[i].img;
            }).then((ignored)=>{});
        }
    }catch(ignored){}
    let getElement = document.querySelector('.getElement');
    let blackout3 = document.querySelector('.blackout3');
    blackout3.onclick = function () {
        blackout3.classList.add('none');
        getElement.classList.add('none');
    };


    const advertElement =  document.getElementById('advert');
    const advertRecipe = document.querySelector('.advertRecipe');
    const blackoutAdvert = document.querySelector('.blackoutAdvert');
    blackoutAdvert.onclick = function () {
        blackoutAdvert.classList.add('none');
        advertRecipe.classList.add('none');
    };
    advertElement.onclick = function () {
        if(showAdv){
            showAdv();
            getNextElement();
            advertRecipe.innerHTML = '';
            advertRecipe.append(getRecipeDiv(thatElement));
            blackoutAdvert.classList.remove('none');
            advertRecipe.classList.remove('none');
            icons.classList.add('none');
            blackout2.classList.add('none');
        }



    };

    if(window.YaGames){
        YaGames.init({
            adv: {
                onAdvClose: wasShown => {
                    if(!wasShown) {
                        advertElement.classList.remove('none');
                        advTime = true;
                    }
                }
            }
        }).then(ysdk => {
            ysdkGame = ysdk;
            initPlayer(ysdk);
            showAdv = () => {
                ysdk.adv.showFullscreenAdv({
                    callbacks: {
                        onClose: function() {
                            advTime = false;
                            advertElement.classList.add('none');
                            setTimeout(()=>{
                                advertElement.classList.remove('none');
                                advTime = true;
                            }, 200000);
                        }
                    }
                });
            };
        });
    }else{
        advertElement.classList.add('none');
    }
    function initPlayer(ysdk) {
        ysdk.getPlayer().then(_player => {
            // Игрок авторизован.
            playerGame = _player;
            playerGame.getData(['elements']).then((obj)=>{
                if(obj.elements && Array.isArray(obj.elements)){
                    myElements = obj.elements;
                }
                addAllElementsToList();
                changeGot();
                getRecipes();
            }).catch((e)=>{
                console.log(e);
            });

        }).catch((e)=>{
            console.log(e);
        });
    }

};

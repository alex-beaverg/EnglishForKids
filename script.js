'use strict';
const menu_list = ['Main Page', 'Action (set A)', 'Action (set B)', 'Weather', 'Furniture', 'Animal (set A)', 'Animal (set B)', 'Clothes', 'Emotion', 'Statistics'];
const actionSetA = ['cry', 'dance', 'dive', 'draw', 'walk', 'fly', 'hug', 'jump'];
const actionSetA_ru = ['плакать', 'танцевать', 'нырять', 'рисовать', 'гулять', 'летать', 'обнимать', 'прыгать'];
const actionSetB = ['open', 'play', 'point', 'ride', 'run', 'sing', 'skip', 'swim'];
const actionSetB_ru = ['открывать', 'играть', 'указывать', 'ездить', 'бегать', 'петь', 'пропускать, прыгать', 'плавать'];
const actionSetC = ['sun', 'lightning', 'rain', 'snow', 'wind', 'hot', 'cold', 'cloud'];
const actionSetC_ru = ['солнце', 'молния', 'дождь', 'снег', 'ветер', 'горячий', 'холодный', 'облако'];
const adjective = ['table', 'chair', 'bookcase', 'bed', 'sofa', 'armchair', 'shelf', 'cupboard'];
const adjective_ru = ['стол', 'стул', 'книжный шкаф', 'кровать', 'диван', 'кресло', 'полка', 'шкаф'];
const animalSetA = ['cat', 'chick', 'chicken', 'dog', 'horse', 'pig', 'rabbit', 'sheep'];
const animalSetA_ru = ['кот', 'цыпленок', 'курица', 'собака', 'лошадь', 'свинья', 'кролик', 'овца'];
const animalSetB = ['bird', 'fish', 'frog', 'giraffe', 'lion', 'mouse', 'turtle', 'dolphin'];
const animalSetB_ru = ['птица', 'рыба', 'лягушка', 'жираф', 'лев', 'мышь', 'черепаха', 'дельфин'];
const clothes = ['skirt', 'pants', 'blouse', 'dress', 'boot', 'shirt', 'coat', 'shoe'];
const clothes_ru = ['юбка', 'брюки', 'блузка', 'платье', 'ботинки', 'рубашка', 'пальто', 'туфли'];
const emotion = ['sad', 'angry', 'happy', 'tired', 'surprised', 'scared', 'smile', 'laugh'];
const emotion_ru = ['грустный', 'злой', 'счастливый', 'уставший', 'удивленный', 'испуганный', 'улыбка', 'смех'];
let play_train = false;
let item = 0;
let game = false;
const res = [];
let count = 0;

function create_element(type, classname, father, inner, idname, attribute_type, attribute) {    
    const elem = document.createElement(type);
    elem.className = classname;
    if (inner !== undefined) elem.innerHTML = inner;
    if (idname !== undefined) elem.id = idname;
    if (attribute !== undefined) elem.setAttribute(attribute_type, attribute);
    father.append(elem);
    return elem;
}

const createIconHTML = (icon_name) => {
    return `<i class="material-icons">${icon_name}</i>`;
};

const header = create_element('div', 'header_class', document.body);
const burger_container = create_element('div', 'burger_container_class', header);
const burger_menu = create_element('nav', 'burger_menu_class', burger_container);
const menu_toggle = create_element('input', '', burger_menu, '', 'menu_toggle_id', 'type', 'checkbox');
const menu_btn = create_element('label', 'menu_btn_class', burger_menu, '', '', 'for', 'menu_toggle_id');
const burger_span = create_element('span', '', menu_btn);
const menu_box = create_element('ul', 'menu_box_class', burger_menu);
const cover = create_element('div', 'cover_class', burger_menu);
const play_train_container = create_element('div', 'play_train_container_class', header, '', 'play_train_container_id');

function create_play_train_button() {
    create_element('p', 'play_train_text_class', play_train_container, 'TRAIN');
    const play_train_button = create_element('div', 'play_train_button_class', play_train_container);
    create_element('div', 'play_train_button_pimpochka_class', play_train_button);    
}

function create_play_train_button_play() {
    const play_train_button = create_element('div', 'play_train_button_class', play_train_container);
    create_element('div', 'play_train_button_pimpochka_class', play_train_button);
    create_element('p', 'play_train_text_class', play_train_container, 'PLAY');    
}
create_play_train_button();
const score = create_element('div', 'score_class', document.body);
const card_field = create_element('div', 'card_field_class', document.body);

function default_content(list) {
    if (item === 0) {
        document.getElementById('image_1').src = 'assets/images/dance.jpg';
        document.getElementById('image_2').src = 'assets/images/swim.jpg';
        document.getElementById('image_3').src = 'assets/images/sun.jpg';
        document.getElementById('image_4').src = 'assets/images/table.jpg';
        document.getElementById('image_5').src = 'assets/images/chick.jpg';
        document.getElementById('image_6').src = 'assets/images/bird.jpg';
        document.getElementById('image_7').src = 'assets/images/blouse.jpg';
        document.getElementById('image_8').src = 'assets/images/smile.jpg';
    }
    for (let i = 1; i < 9; i++) {
        if (item === 0) document.getElementById(`text_${i}`).innerHTML = menu_list[i];
        else if (item === 1) {
            document.getElementById(`image_${i}`).src = `assets/images/${actionSetA[i - 1]}.jpg`;
            if (!play_train) document.getElementById(`text_${i}`).innerHTML = actionSetA[i - 1];
        } else if (item === 2) {
            document.getElementById(`image_${i}`).src = `assets/images/${actionSetB[i - 1]}.jpg`;
            if (!play_train) document.getElementById(`text_${i}`).innerHTML = actionSetB[i - 1];
        } else if (item === 3) {
            document.getElementById(`image_${i}`).src = `assets/images/${actionSetC[i - 1]}.jpg`;
            if (!play_train) document.getElementById(`text_${i}`).innerHTML = actionSetC[i - 1];
        } else if (item === 4) {
            document.getElementById(`image_${i}`).src = `assets/images/${adjective[i - 1]}.jpg`;
            if (!play_train) document.getElementById(`text_${i}`).innerHTML = adjective[i - 1];
        } else if (item === 5) {
            document.getElementById(`image_${i}`).src = `assets/images/${animalSetA[i - 1]}.jpg`;
            if (!play_train) document.getElementById(`text_${i}`).innerHTML = animalSetA[i - 1];
        } else if (item === 6) {
            document.getElementById(`image_${i}`).src = `assets/images/${animalSetB[i - 1]}.jpg`;
            if (!play_train) document.getElementById(`text_${i}`).innerHTML = animalSetB[i - 1];
        } else if (item === 7) {
            document.getElementById(`image_${i}`).src = `assets/images/${clothes[i - 1]}.jpg`;
            if (!play_train) document.getElementById(`text_${i}`).innerHTML = clothes[i - 1];
        } else if (item === 8) {
            document.getElementById(`image_${i}`).src = `assets/images/${emotion[i - 1]}.jpg`;
            if (!play_train) document.getElementById(`text_${i}`).innerHTML = emotion[i - 1];
        } else if (item === 9) {            
            document.getElementById(`image_${i}`).src = `assets/images/${list[i - 1].original}.jpg`;
            if (!play_train) document.getElementById(`text_${i}`).innerHTML = list[i - 1].original;
        }
    }
}

function default_r_content(list) {    
    for (let i = 1; i < 9; i++) {
        if (item === 1) {
            document.getElementById(`image_r_${i}`).src = `assets/images/${actionSetA[i - 1]}.jpg`;
            document.getElementById(`text_r_${i}`).innerHTML = actionSetA_ru[i - 1];
        } else if (item === 2) {
            document.getElementById(`image_r_${i}`).src = `assets/images/${actionSetB[i - 1]}.jpg`;
            document.getElementById(`text_r_${i}`).innerHTML = actionSetB_ru[i - 1];
        } else if (item === 3) {
            document.getElementById(`image_r_${i}`).src = `assets/images/${actionSetC[i - 1]}.jpg`;
            document.getElementById(`text_r_${i}`).innerHTML = actionSetC_ru[i - 1];
        } else if (item === 4) {
            document.getElementById(`image_r_${i}`).src = `assets/images/${adjective[i - 1]}.jpg`;
            document.getElementById(`text_r_${i}`).innerHTML = adjective_ru[i - 1];
        } else if (item === 5) {
            document.getElementById(`image_r_${i}`).src = `assets/images/${animalSetA[i - 1]}.jpg`;
            document.getElementById(`text_r_${i}`).innerHTML = animalSetA_ru[i - 1];
        } else if (item === 6) {
            document.getElementById(`image_r_${i}`).src = `assets/images/${animalSetB[i - 1]}.jpg`;
            document.getElementById(`text_r_${i}`).innerHTML = animalSetB_ru[i - 1];
        } else if (item === 7) {
            document.getElementById(`image_r_${i}`).src = `assets/images/${clothes[i - 1]}.jpg`;
            document.getElementById(`text_r_${i}`).innerHTML = clothes_ru[i - 1];
        } else if (item === 8) {
            document.getElementById(`image_r_${i}`).src = `assets/images/${emotion[i - 1]}.jpg`;
            document.getElementById(`text_r_${i}`).innerHTML = emotion_ru[i - 1];
        } else if (item === 9) {
            document.getElementById(`image_r_${i}`).src = `assets/images/${list[i - 1].original}.jpg`;
            document.getElementById(`text_r_${i}`).innerHTML = list[i - 1].translate;
        }
    }
}

function create_new_cards(list) {    
    for (let i = 1; i < 9; i++) {
        for (let j = 0; j < 10; j++) {
            document.getElementById(`menu_item_${j}`).style.textDecoration = 'none';
        }
        if (item !== 9) document.getElementById(`menu_item_${item}`).style.textDecoration = 'underline';
        const cell = create_element('div', 'cell_class', card_field);        
        const card = document.createElement('div');
        if (!play_train) card.className = 'new_card_class';
        else card.className = 'new_card_play_class';        
        if (item === 1) card.id = `action_set_a_card_${i}`;
        else if (item === 2) card.id = `action_set_b_card_${i}`;
        else if (item === 3) card.id = `action_set_c_card_${i}`;
        else if (item === 4) card.id = `adjective_card_${i}`;
        else if (item === 5) card.id = `animal_set_a_card_${i}`;
        else if (item === 6) card.id = `animal_set_b_card_${i}`;
        else if (item === 7) card.id = `clothes_card_${i}`;
        else if (item === 8) card.id = `emotion_card_${i}`;
        else if (item === 9) card.id = `diff_card_${i}`;
        cell.append(card);
        const card_image = document.createElement('img');
        if (!play_train) card_image.className = 'train_card_image_class';
        else card_image.className = 'play_card_image_class';
        card_image.id = `image_${i}`;
        card.append(card_image);        
        if (!play_train) {
            create_element('p', 'train_card_text_class', card, '', `text_${i}`);
            create_element('div', 'rotate_class', card, createIconHTML('autorenew'), `rotate_${i}`);            
        }        
        if (!play_train) {
            card_image.addEventListener('click', () => {
                let audio_object = {};
                if (item === 1) {
                    const obj = JSON.parse(localStorage.getItem(actionSetA[i - 1]));
                    obj.train++;
                    localStorage.setItem(obj.original, JSON.stringify(obj));
                    audio_object = new Audio(`assets/audio/${actionSetA[i - 1]}.mp3`);
                    audio_object.play();
                } else if (item === 2) {
                    const obj = JSON.parse(localStorage.getItem(actionSetB[i - 1]));
                    obj.train++;
                    localStorage.setItem(obj.original, JSON.stringify(obj));
                    audio_object = new Audio(`assets/audio/${actionSetB[i - 1]}.mp3`);
                    audio_object.play();
                } else if (item === 3) {
                    const obj = JSON.parse(localStorage.getItem(actionSetC[i - 1]));
                    obj.train++;
                    localStorage.setItem(obj.original, JSON.stringify(obj));
                    audio_object = new Audio(`assets/audio/${actionSetC[i - 1]}.mp3`);
                    audio_object.play();
                } else if (item === 4) {
                    const obj = JSON.parse(localStorage.getItem(adjective[i - 1]));
                    obj.train++;
                    localStorage.setItem(obj.original, JSON.stringify(obj));
                    audio_object = new Audio(`assets/audio/${adjective[i - 1]}.mp3`);
                    audio_object.play();
                } else if (item === 5) {
                    const obj = JSON.parse(localStorage.getItem(animalSetA[i - 1]));
                    obj.train++;
                    localStorage.setItem(obj.original, JSON.stringify(obj));
                    audio_object = new Audio(`assets/audio/${animalSetA[i - 1]}.mp3`);
                    audio_object.play();
                } else if (item === 6) {
                    const obj = JSON.parse(localStorage.getItem(animalSetB[i - 1]));
                    obj.train++;
                    localStorage.setItem(obj.original, JSON.stringify(obj));
                    audio_object = new Audio(`assets/audio/${animalSetB[i - 1]}.mp3`);
                    audio_object.play();
                } else if (item === 7) {
                    const obj = JSON.parse(localStorage.getItem(clothes[i - 1]));
                    obj.train++;
                    localStorage.setItem(obj.original, JSON.stringify(obj));
                    audio_object = new Audio(`assets/audio/${clothes[i - 1]}.mp3`);
                    audio_object.play();
                } else if (item === 8) {
                    const obj = JSON.parse(localStorage.getItem(emotion[i - 1]));
                    obj.train++;
                    localStorage.setItem(obj.original, JSON.stringify(obj));
                    audio_object = new Audio(`assets/audio/${emotion[i - 1]}.mp3`);
                    audio_object.play();
                }
                else if (item === 9) {
                    const obj = JSON.parse(localStorage.getItem(list[i - 1].original));
                    obj.train++;
                    localStorage.setItem(obj.original, JSON.stringify(obj));
                    audio_object = new Audio(`assets/audio/${list[i - 1].original}.mp3`);
                    audio_object.play();
                }
            });

            document.getElementById(`rotate_${i}`).addEventListener('click', () => {            
                if (item === 1) {
                    const obj = JSON.parse(localStorage.getItem(actionSetA[i - 1]));
                    obj.watch++;
                    localStorage.setItem(obj.original, JSON.stringify(obj));
                    document.getElementById(`action_set_a_card_${i}`).style.transform = 'scale(0, 1)';
                    document.getElementById(`action_set_a_card_${i}`).style.visibility = 'hidden'; 
                    document.getElementById(`action_set_a_card_${i}`).style.transition = 'transform 0.3s, visibility 0s 0.3s';            
                    document.getElementById(`action_set_a_card_r_${i}`).style.transform = 'scale(1, 1)';
                    document.getElementById(`action_set_a_card_r_${i}`).style.visibility = 'visible';
                    document.getElementById(`action_set_a_card_r_${i}`).style.transition = 'transform 0.3s 0.3s, visibility 0s 0.3s';
                } else if (item === 2) {
                    const obj = JSON.parse(localStorage.getItem(actionSetB[i - 1]));
                    obj.watch++;
                    localStorage.setItem(obj.original, JSON.stringify(obj));
                    document.getElementById(`action_set_b_card_${i}`).style.transform = 'scale(0, 1)';
                    document.getElementById(`action_set_b_card_${i}`).style.visibility = 'hidden'; 
                    document.getElementById(`action_set_b_card_${i}`).style.transition = 'transform 0.3s, visibility 0s 0.3s';            
                    document.getElementById(`action_set_b_card_r_${i}`).style.transform = 'scale(1, 1)';
                    document.getElementById(`action_set_b_card_r_${i}`).style.visibility = 'visible';
                    document.getElementById(`action_set_b_card_r_${i}`).style.transition = 'transform 0.3s 0.3s, visibility 0s 0.3s';
                } else if (item === 3) {
                    const obj = JSON.parse(localStorage.getItem(actionSetC[i - 1]));
                    obj.watch++;
                    localStorage.setItem(obj.original, JSON.stringify(obj));
                    document.getElementById(`action_set_c_card_${i}`).style.transform = 'scale(0, 1)';
                    document.getElementById(`action_set_c_card_${i}`).style.visibility = 'hidden'; 
                    document.getElementById(`action_set_c_card_${i}`).style.transition = 'transform 0.3s, visibility 0s 0.3s';            
                    document.getElementById(`action_set_c_card_r_${i}`).style.transform = 'scale(1, 1)';
                    document.getElementById(`action_set_c_card_r_${i}`).style.visibility = 'visible';
                    document.getElementById(`action_set_c_card_r_${i}`).style.transition = 'transform 0.3s 0.3s, visibility 0s 0.3s';
                } else if (item === 4) {
                    const obj = JSON.parse(localStorage.getItem(adjective[i - 1]));
                    obj.watch++;
                    localStorage.setItem(obj.original, JSON.stringify(obj));
                    document.getElementById(`adjective_card_${i}`).style.transform = 'scale(0, 1)';
                    document.getElementById(`adjective_card_${i}`).style.visibility = 'hidden'; 
                    document.getElementById(`adjective_card_${i}`).style.transition = 'transform 0.3s, visibility 0s 0.3s';            
                    document.getElementById(`adjective_card_r_${i}`).style.transform = 'scale(1, 1)';
                    document.getElementById(`adjective_card_r_${i}`).style.visibility = 'visible';
                    document.getElementById(`adjective_card_r_${i}`).style.transition = 'transform 0.3s 0.3s, visibility 0s 0.3s';
                } else if (item === 5) {
                    const obj = JSON.parse(localStorage.getItem(animalSetA[i - 1]));
                    obj.watch++;
                    localStorage.setItem(obj.original, JSON.stringify(obj));
                    document.getElementById(`animal_set_a_card_${i}`).style.transform = 'scale(0, 1)';
                    document.getElementById(`animal_set_a_card_${i}`).style.visibility = 'hidden'; 
                    document.getElementById(`animal_set_a_card_${i}`).style.transition = 'transform 0.3s, visibility 0s 0.3s';            
                    document.getElementById(`animal_set_a_card_r_${i}`).style.transform = 'scale(1, 1)';
                    document.getElementById(`animal_set_a_card_r_${i}`).style.visibility = 'visible';
                    document.getElementById(`animal_set_a_card_r_${i}`).style.transition = 'transform 0.3s 0.3s, visibility 0s 0.3s';
                } else if (item === 6) {
                    const obj = JSON.parse(localStorage.getItem(animalSetB[i - 1]));
                    obj.watch++;
                    localStorage.setItem(obj.original, JSON.stringify(obj));
                    document.getElementById(`animal_set_b_card_${i}`).style.transform = 'scale(0, 1)';
                    document.getElementById(`animal_set_b_card_${i}`).style.visibility = 'hidden'; 
                    document.getElementById(`animal_set_b_card_${i}`).style.transition = 'transform 0.3s, visibility 0s 0.3s';            
                    document.getElementById(`animal_set_b_card_r_${i}`).style.transform = 'scale(1, 1)';
                    document.getElementById(`animal_set_b_card_r_${i}`).style.visibility = 'visible';
                    document.getElementById(`animal_set_b_card_r_${i}`).style.transition = 'transform 0.3s 0.3s, visibility 0s 0.3s';
                } else if (item === 7) {
                    const obj = JSON.parse(localStorage.getItem(clothes[i - 1]));
                    obj.watch++;
                    localStorage.setItem(obj.original, JSON.stringify(obj));
                    document.getElementById(`clothes_card_${i}`).style.transform = 'scale(0, 1)';
                    document.getElementById(`clothes_card_${i}`).style.visibility = 'hidden'; 
                    document.getElementById(`clothes_card_${i}`).style.transition = 'transform 0.3s, visibility 0s 0.3s';            
                    document.getElementById(`clothes_card_r_${i}`).style.transform = 'scale(1, 1)';
                    document.getElementById(`clothes_card_r_${i}`).style.visibility = 'visible';
                    document.getElementById(`clothes_card_r_${i}`).style.transition = 'transform 0.3s 0.3s, visibility 0s 0.3s';
                } else if (item === 8) {
                    const obj = JSON.parse(localStorage.getItem(emotion[i - 1]));
                    obj.watch++;
                    localStorage.setItem(obj.original, JSON.stringify(obj));
                    document.getElementById(`emotion_card_${i}`).style.transform = 'scale(0, 1)';
                    document.getElementById(`emotion_card_${i}`).style.visibility = 'hidden'; 
                    document.getElementById(`emotion_card_${i}`).style.transition = 'transform 0.3s, visibility 0s 0.3s';            
                    document.getElementById(`emotion_card_r_${i}`).style.transform = 'scale(1, 1)';
                    document.getElementById(`emotion_card_r_${i}`).style.visibility = 'visible';
                    document.getElementById(`emotion_card_r_${i}`).style.transition = 'transform 0.3s 0.3s, visibility 0s 0.3s';
                } else if (item === 9) {
                    const obj = JSON.parse(localStorage.getItem(list[i - 1].original));
                    obj.watch++;
                    localStorage.setItem(obj.original, JSON.stringify(obj));
                    document.getElementById(`diff_card_${i}`).style.transform = 'scale(0, 1)';
                    document.getElementById(`diff_card_${i}`).style.visibility = 'hidden'; 
                    document.getElementById(`diff_card_${i}`).style.transition = 'transform 0.3s, visibility 0s 0.3s';            
                    document.getElementById(`diff_card_r_${i}`).style.transform = 'scale(1, 1)';
                    document.getElementById(`diff_card_r_${i}`).style.visibility = 'visible';
                    document.getElementById(`diff_card_r_${i}`).style.transition = 'transform 0.3s 0.3s, visibility 0s 0.3s';
                }            
            }); 
        }  
        const card_r = document.createElement('div');
        card_r.className = 'new_card_r_class';        
        if (item === 1) card_r.id = `action_set_a_card_r_${i}`;
        else if (item === 2) card_r.id = `action_set_b_card_r_${i}`;
        else if (item === 3) card_r.id = `action_set_c_card_r_${i}`;
        else if (item === 4) card_r.id = `adjective_card_r_${i}`;
        else if (item === 5) card_r.id = `animal_set_a_card_r_${i}`;
        else if (item === 6) card_r.id = `animal_set_b_card_r_${i}`;
        else if (item === 7) card_r.id = `clothes_card_r_${i}`;
        else if (item === 8) card_r.id = `emotion_card_r_${i}`;
        else if (item === 9) card_r.id = `diff_card_r_${i}`;
        cell.append(card_r);
        create_element('img', 'train_card_r_image_class', card_r, '', `image_r_${i}`);
        create_element('p', 'train_card_r_text_class', card_r, '', `text_r_${i}`); 
        
        card_r.addEventListener('mouseleave', () => {
            if (item === 1) {
                document.getElementById(`action_set_a_card_r_${i}`).style.transform = 'scale(0, 1)';
                document.getElementById(`action_set_a_card_r_${i}`).style.visibility = 'hidden'; 
                document.getElementById(`action_set_a_card_r_${i}`).style.transition = 'transform 0.3s, visibility 0s 0.3s';            
                document.getElementById(`action_set_a_card_${i}`).style.transform = 'scale(1, 1)';
                document.getElementById(`action_set_a_card_${i}`).style.visibility = 'visible';
                document.getElementById(`action_set_a_card_${i}`).style.transition = 'transform 0.3s 0.3s, visibility 0s 0.3s';
            } else if (item === 2) {
                document.getElementById(`action_set_b_card_r_${i}`).style.transform = 'scale(0, 1)';
                document.getElementById(`action_set_b_card_r_${i}`).style.visibility = 'hidden'; 
                document.getElementById(`action_set_b_card_r_${i}`).style.transition = 'transform 0.3s, visibility 0s 0.3s';            
                document.getElementById(`action_set_b_card_${i}`).style.transform = 'scale(1, 1)';
                document.getElementById(`action_set_b_card_${i}`).style.visibility = 'visible';
                document.getElementById(`action_set_b_card_${i}`).style.transition = 'transform 0.3s 0.3s, visibility 0s 0.3s';
            } else if (item === 3) {
                document.getElementById(`action_set_c_card_r_${i}`).style.transform = 'scale(0, 1)';
                document.getElementById(`action_set_c_card_r_${i}`).style.visibility = 'hidden'; 
                document.getElementById(`action_set_c_card_r_${i}`).style.transition = 'transform 0.3s, visibility 0s 0.3s';            
                document.getElementById(`action_set_c_card_${i}`).style.transform = 'scale(1, 1)';
                document.getElementById(`action_set_c_card_${i}`).style.visibility = 'visible';
                document.getElementById(`action_set_c_card_${i}`).style.transition = 'transform 0.3s 0.3s, visibility 0s 0.3s';
            } else if (item === 4) {
                document.getElementById(`adjective_card_r_${i}`).style.transform = 'scale(0, 1)';
                document.getElementById(`adjective_card_r_${i}`).style.visibility = 'hidden'; 
                document.getElementById(`adjective_card_r_${i}`).style.transition = 'transform 0.3s, visibility 0s 0.3s';            
                document.getElementById(`adjective_card_${i}`).style.transform = 'scale(1, 1)';
                document.getElementById(`adjective_card_${i}`).style.visibility = 'visible';
                document.getElementById(`adjective_card_${i}`).style.transition = 'transform 0.3s 0.3s, visibility 0s 0.3s';
            } else if (item === 5) {
                document.getElementById(`animal_set_a_card_r_${i}`).style.transform = 'scale(0, 1)';
                document.getElementById(`animal_set_a_card_r_${i}`).style.visibility = 'hidden'; 
                document.getElementById(`animal_set_a_card_r_${i}`).style.transition = 'transform 0.3s, visibility 0s 0.3s';            
                document.getElementById(`animal_set_a_card_${i}`).style.transform = 'scale(1, 1)';
                document.getElementById(`animal_set_a_card_${i}`).style.visibility = 'visible';
                document.getElementById(`animal_set_a_card_${i}`).style.transition = 'transform 0.3s 0.3s, visibility 0s 0.3s';
            } else if (item === 6) {
                document.getElementById(`animal_set_b_card_r_${i}`).style.transform = 'scale(0, 1)';
                document.getElementById(`animal_set_b_card_r_${i}`).style.visibility = 'hidden'; 
                document.getElementById(`animal_set_b_card_r_${i}`).style.transition = 'transform 0.3s, visibility 0s 0.3s';            
                document.getElementById(`animal_set_b_card_${i}`).style.transform = 'scale(1, 1)';
                document.getElementById(`animal_set_b_card_${i}`).style.visibility = 'visible';
                document.getElementById(`animal_set_b_card_${i}`).style.transition = 'transform 0.3s 0.3s, visibility 0s 0.3s';
            } else if (item === 7) {
                document.getElementById(`clothes_card_r_${i}`).style.transform = 'scale(0, 1)';
                document.getElementById(`clothes_card_r_${i}`).style.visibility = 'hidden'; 
                document.getElementById(`clothes_card_r_${i}`).style.transition = 'transform 0.3s, visibility 0s 0.3s';            
                document.getElementById(`clothes_card_${i}`).style.transform = 'scale(1, 1)';
                document.getElementById(`clothes_card_${i}`).style.visibility = 'visible';
                document.getElementById(`clothes_card_${i}`).style.transition = 'transform 0.3s 0.3s, visibility 0s 0.3s';
            } else if (item === 8) {
                document.getElementById(`emotion_card_r_${i}`).style.transform = 'scale(0, 1)';
                document.getElementById(`emotion_card_r_${i}`).style.visibility = 'hidden'; 
                document.getElementById(`emotion_card_r_${i}`).style.transition = 'transform 0.3s, visibility 0s 0.3s';            
                document.getElementById(`emotion_card_${i}`).style.transform = 'scale(1, 1)';
                document.getElementById(`emotion_card_${i}`).style.visibility = 'visible';
                document.getElementById(`emotion_card_${i}`).style.transition = 'transform 0.3s 0.3s, visibility 0s 0.3s';
            } else if (item === 9) {
                document.getElementById(`diff_card_r_${i}`).style.transform = 'scale(0, 1)';
                document.getElementById(`diff_card_r_${i}`).style.visibility = 'hidden'; 
                document.getElementById(`diff_card_r_${i}`).style.transition = 'transform 0.3s, visibility 0s 0.3s';            
                document.getElementById(`diff_card_${i}`).style.transform = 'scale(1, 1)';
                document.getElementById(`diff_card_${i}`).style.visibility = 'visible';
                document.getElementById(`diff_card_${i}`).style.transition = 'transform 0.3s 0.3s, visibility 0s 0.3s';
            }
        });
    }
    default_content(list);
    default_r_content(list);  

    const start_game = create_element('button', 'start_game_class', card_field, 'Начать игру', '', 'type', 'button');    
    if (play_train && item > 0) document.querySelector('.start_game_class').style.visibility = 'visible';
    if (!play_train && item > 0) document.querySelector('.start_game_class').style.visibility = 'hidden';

    start_game.addEventListener('click', () => {  
        score.innerHTML = '';
        count = 0;        
        game = true;
        let arr = [];
        let ide = '';        
        let x;
        let mistakes = 0;
        let audio_object = {}; 
        while (res.length < 8) {  
            x = Math.round(7 * Math.random());
            if (res.indexOf(x, 0) === -1) res.push(x);
        }                  
        if (item === 1) { ide = 'action_set_a_card_'; arr = actionSetA; }
        else if(item === 2) { ide = 'action_set_b_card_'; arr = actionSetB; }
        else if(item === 3) { ide = 'action_set_c_card_'; arr = actionSetC; }
        else if(item === 4) { ide = 'adjective_card_'; arr = adjective; }
        else if(item === 5) { ide = 'animal_set_a_card_'; arr = animalSetA; }
        else if(item === 6) { ide = 'animal_set_b_card_'; arr = animalSetB; }
        else if(item === 7) { ide = 'clothes_card_'; arr = clothes; }
        else if(item === 8) { ide = 'emotion_card_'; arr = emotion; }
        else if(item === 9) { 
            ide = 'diff_card_';
            for (let i = 0; i < 8; i++) {
                arr.push(list[i].original); 
            }
        }
        setTimeout(() => {
            audio_object = new Audio(`assets/audio/${arr[res[count]]}.mp3`);
            audio_object.play();
        }, 500);
        create_element('button', 'repeat_butt_class', card_field, createIconHTML('autorenew'), '', 'type', 'button');

        document.querySelector('.start_game_class').className = 'start_game_class repeat_class';
        document.querySelector('.repeat_class').innerHTML = createIconHTML('autorenew');
        document.querySelector('.repeat_class').style = 'visibility: hidden';
        document.querySelector('.repeat_butt_class').addEventListener('click', () => { 
            audio_object = new Audio(`assets/audio/${arr[res[count]]}.mp3`);            
            audio_object.play();
        });      
        if (item > 0 && play_train && game) {  
            for (let i = 1; i <= res.length; i++) {                  
                document.getElementById(`${ide}${i}`).style = 'pointer-events: auto; opacity: 1;';              
                document.getElementById(`${ide}${i}`).addEventListener('click', () => {   
                    if (document.getElementById(`${ide}${i}`).id === `${ide}${res[count] + 1}`) {                        
                        document.getElementById(`${ide}${i}`).style = 'pointer-events: none; opacity: 0.15; transition: opacity 0.5s';
                        const obj = JSON.parse(localStorage.getItem(arr[res[count]]));
                        obj.victory++;
                        obj.percent = Math.floor(((obj.victory * 100) / (obj.victory + obj.fail)) * 10) / 10; 
                        localStorage.setItem(obj.original, JSON.stringify(obj));
                        audio_object = new Audio('assets/audio/dzyn.mp3');
                        audio_object.play(); 
                        score.innerHTML += createIconHTML('star');                          
                        count++; 
                        if (count < 8) {
                            setTimeout(() => {
                                audio_object = new Audio(`assets/audio/${arr[res[count]]}.mp3`);
                                audio_object.play();
                            }, 1000);
                        } else {
                            setTimeout(() => {
                                if (mistakes === 0) {
                                    document.body.innerHTML = '<img src="assets/images/success.jpg">';
                                    audio_object = new Audio('assets/audio/victory.mp3');
                                    audio_object.play();
                                } else {                                    
                                    document.body.innerHTML = `<h2>Количество ошибок: ${mistakes}</h2><br><img src="assets/images/failure.jpg">`;
                                    audio_object = new Audio('assets/audio/failure.mp3');
                                    audio_object.play();
                                }
                            }, 1000);
                            setTimeout(() => {
                                window.location.reload();
                            }, 6000);                            
                        }
                    } else {  
                        const obj = JSON.parse(localStorage.getItem(arr[res[count]]));
                        obj.fail++;   
                        obj.percent = Math.floor(((obj.victory * 100) / (obj.victory + obj.fail)) * 10) / 10;                       
                        localStorage.setItem(obj.original, JSON.stringify(obj));                                       
                        audio_object = new Audio('assets/audio/fail.mp3');
                        audio_object.play();
                        score.innerHTML += `<span style="color: gray">${createIconHTML('star_border')}</span>`;
                        mistakes++;
                    }
                });
            }
        } 
    });    
}

for (let i = 0; i < 10; i++) {
    create_element('li', 'menu_item_class', menu_box, menu_list[i], `menu_item_${i}`);
    if (i > 0 && i < 9) {
        document.getElementById(`menu_item_${i}`).addEventListener('click', () => {
            card_field.innerHTML = '';
            play_train_container.style.visibility = 'visible';
            item = i;
            create_new_cards();
            setTimeout(() => {
                document.getElementById('menu_toggle_id').checked = false;
            }, 200);
        });
    }
}
for (let i = 0; i < 10; i++) {
    document.getElementById(`menu_item_${i}`).style.textDecoration = 'none';
}
document.getElementById(`menu_item_${item}`).style.textDecoration = 'underline';

function create_cards() {
    for (let i = 1; i < 9; i++) {
        const card = document.createElement('div');
        if (!play_train) {
            card.className = 'card_class';
        } else {
            card.className = 'card_play_class';
        }
        card.id = `card_${i}`;
        card_field.append(card);
        create_element('img', 'card_image_class', card, '', `image_${i}`);
        create_element('p', 'card_text_class', card, '', `text_${i}`);
        document.getElementById(`card_${i}`).addEventListener('click', () => {
            card_field.innerHTML = '';
            item = i;
            create_new_cards();
        });
    }
    default_content();
}
create_cards();

function create_cards_play() {
    for (let i = 1; i < 9; i++) {
        document.getElementById(`card_${i}`).className = 'card_play_class';
    }    
}
function create_cards_train() {
    for (let i = 1; i < 9; i++) {
        document.getElementById(`card_${i}`).className = 'card_class';
    }
}

const list = ['', actionSetA, actionSetB, actionSetC, adjective, animalSetA, animalSetB, clothes, emotion];
const list_ru = ['', actionSetA_ru, actionSetB_ru, actionSetC_ru, adjective_ru, animalSetA_ru, animalSetB_ru, clothes_ru, emotion_ru];
let objects = [];
function default_stat() {
    for (let i = 1; i < 9; i++) {
        for (let j = 0; j < 8; j++) {
            const object = {
                set: menu_list[i],
                original: list[i][j],
                translate: list_ru[i][j],
                train: 0,
                watch: 0,
                victory: 0,
                fail: 0,
                percent: 100            
            };
            objects.push(object);
            if (JSON.parse(localStorage.getItem(list[i][j])) === null) localStorage.setItem(object.original, JSON.stringify(object));
        }
    }
}
default_stat();

function create_new_list() {
    const new_list = [];
    for (let i = 0; i < objects.length; i++) {            
        new_list.push(JSON.parse(localStorage.getItem(objects[i].original)));            
    }        
    new_list.sort((a, b) => a.percent - b.percent); 
    const diff_words = [];
    for (let i = 0; i < 8; i++) {
        diff_words.push(new_list[i]);
    } 
    return diff_words;
}

play_train_container.addEventListener('click', () => {
    play_train = !play_train;
    score.innerHTML = '';
    if (!play_train) {
        play_train_container.innerHTML = '';
        create_play_train_button();
        document.getElementById('play_train_container_id').className = 'play_train_container_class';
        if (item === 0) create_cards_train();
        else if (item > 0) {
            card_field.innerHTML = '';
            create_new_cards(create_new_list());
        }
        if (item > 0) document.querySelector('.start_game_class').style.visibility = 'hidden';
    } else {
        play_train_container.innerHTML = '';
        create_play_train_button_play();
        document.getElementById('play_train_container_id').className = 'play_train_play_container_class';
        if (item === 0) create_cards_play();
        else if (item > 0) {
            card_field.innerHTML = '';
            create_new_cards(create_new_list());
        }
        if (item > 0) document.querySelector('.start_game_class').style.visibility = 'visible';
    }
});

let sort_set = false;
let sort_original = false;
let sort_translate = false;
let sort_train = false;
let sort_watch = false;
let sort_victory = false;
let sort_fail = false;
let sort_percent = false;

function create_statistic_table() {
    const reset_stat = create_element('button', 'reset_stat_class', card_field, 'Reset');
    const repeat_diff = create_element('button', 'repeat_diff_words_class', card_field, 'Repeat difficult words');    
    const stat_table = create_element('table', 'stat_table_class', card_field); 
    const tr = create_element('tr', 'th_class', stat_table); 
    create_element('th', 'th_class', tr, 'Theme');    
    create_element('th', 'th_class', tr, 'Word');
    create_element('th', 'th_class', tr, 'Translate');    
    create_element('th', 'th_class', tr, 'Listen');    
    create_element('th', 'th_class', tr, 'Rotate');    
    create_element('th', 'th_class', tr, 'Win');    
    create_element('th', 'th_class', tr, 'Fail');    
    create_element('th', 'th_class', tr, '%');    
    const tr1 = create_element('tr', 'tr_class', stat_table); 
    create_element('th', 'td_class_1', tr1, createIconHTML('sort_by_alpha'));    
    create_element('th', 'td_class_2', tr1, createIconHTML('sort_by_alpha'));    
    create_element('th', 'td_class_3', tr1, createIconHTML('sort_by_alpha'));    
    create_element('th', 'td_class_4', tr1, createIconHTML('sort_by_alpha'));    
    create_element('th', 'td_class_5', tr1, createIconHTML('sort_by_alpha'));    
    create_element('th', 'td_class_6', tr1, createIconHTML('sort_by_alpha'));    
    create_element('th', 'td_class_7', tr1, createIconHTML('sort_by_alpha'));    
    create_element('th', 'td_class_8', tr1, createIconHTML('sort_by_alpha'));      
    
    for (let i = 0; i < objects.length; i++) {
        const obj = JSON.parse(localStorage.getItem(objects[i].original));
        const tr = create_element('tr', 'tr_class', stat_table); 
        create_element('td', 'td_class_0', tr, obj.set);        
        create_element('td', 'td_class', tr, obj.original);        
        create_element('td', 'td_class', tr, obj.translate);        
        create_element('td', 'td_class', tr, obj.train);        
        create_element('td', 'td_class', tr, obj.watch);        
        create_element('td', 'td_class', tr, obj.victory);        
        create_element('td', 'td_class', tr, obj.fail);        
        create_element('td', 'td_class', tr, obj.percent);        
    } 
    
    document.querySelector('.td_class_1').addEventListener('click', () => {
        sort_set = !sort_set; 
        const new_list = [];
        for (let i = 0; i < objects.length; i++) {            
            new_list.push(JSON.parse(localStorage.getItem(objects[i].original)));            
        }
        objects = [];
        objects = new_list;
        if (sort_set) objects.sort((a, b) => a.set > b.set ? 1 : -1);
        else objects.sort((a, b) => b.set > a.set ? 1 : -1);        
        card_field.innerHTML = '';
        create_statistic_table();
    });

    document.querySelector('.td_class_2').addEventListener('click', () => {
        sort_original = !sort_original; 
        const new_list = [];
        for (let i = 0; i < objects.length; i++) {            
            new_list.push(JSON.parse(localStorage.getItem(objects[i].original)));            
        }
        objects = [];
        objects = new_list;       
        if (sort_original) objects.sort((a, b) => a.original > b.original ? 1 : -1);
        else objects.sort((a, b) => b.original > a.original ? 1 : -1);        
        card_field.innerHTML = '';
        create_statistic_table();
    });

    document.querySelector('.td_class_3').addEventListener('click', () => {
        sort_translate = !sort_translate; 
        const new_list = [];
        for (let i = 0; i < objects.length; i++) {            
            new_list.push(JSON.parse(localStorage.getItem(objects[i].original)));            
        }
        objects = [];
        objects = new_list;       
        if (sort_translate) objects.sort((a, b) => a.translate > b.translate ? 1 : -1);
        else objects.sort((a, b) => b.translate > a.translate ? 1 : -1);        
        card_field.innerHTML = '';
        create_statistic_table();
    });   

    document.querySelector('.td_class_4').addEventListener('click', () => {
        sort_train = !sort_train; 
        const new_list = [];
        for (let i = 0; i < objects.length; i++) {            
            new_list.push(JSON.parse(localStorage.getItem(objects[i].original)));            
        }
        objects = [];
        objects = new_list;       
        if (sort_train) objects.sort((a, b) => a.train - b.train);
        else objects.sort((a, b) => b.train - a.train);        
        card_field.innerHTML = '';
        create_statistic_table();
    });

    document.querySelector('.td_class_5').addEventListener('click', () => {
        sort_watch = !sort_watch; 
        const new_list = [];
        for (let i = 0; i < objects.length; i++) {            
            new_list.push(JSON.parse(localStorage.getItem(objects[i].original)));            
        }
        objects = [];
        objects = new_list;       
        if (sort_watch) objects.sort((a, b) => a.watch - b.watch);
        else objects.sort((a, b) => b.watch - a.watch);        
        card_field.innerHTML = '';
        create_statistic_table();
    });

    document.querySelector('.td_class_6').addEventListener('click', () => {
        sort_victory = !sort_victory;  
        const new_list = [];
        for (let i = 0; i < objects.length; i++) {            
            new_list.push(JSON.parse(localStorage.getItem(objects[i].original)));            
        }
        objects = [];
        objects = new_list;      
        if (sort_victory) objects.sort((a, b) => a.victory - b.victory);
        else objects.sort((a, b) => b.victory - a.victory);        
        card_field.innerHTML = '';
        create_statistic_table();
    });

    document.querySelector('.td_class_7').addEventListener('click', () => {
        sort_fail = !sort_fail;  
        const new_list = [];
        for (let i = 0; i < objects.length; i++) {            
            new_list.push(JSON.parse(localStorage.getItem(objects[i].original)));            
        }
        objects = [];
        objects = new_list;      
        if (sort_fail) objects.sort((a, b) => a.fail - b.fail);
        else objects.sort((a, b) => b.fail - a.fail);        
        card_field.innerHTML = '';
        create_statistic_table();
    });

    document.querySelector('.td_class_8').addEventListener('click', () => {
        sort_percent = !sort_percent;  
        const new_list = [];
        for (let i = 0; i < objects.length; i++) {            
            new_list.push(JSON.parse(localStorage.getItem(objects[i].original)));            
        }
        objects = [];
        objects = new_list;      
        if (sort_percent) objects.sort((a, b) => a.percent - b.percent);
        else objects.sort((a, b) => b.percent - a.percent);         
        card_field.innerHTML = '';
        create_statistic_table();
    });

    reset_stat.addEventListener('click', () => {
        localStorage.clear();
        card_field.innerHTML = '';
        objects = [];
        default_stat();
        create_statistic_table();
    });

    repeat_diff.addEventListener('click', () => {         
        card_field.innerHTML = ''; 
        if (create_new_list()[0].percent === 100) {                        
            for (let i = 0; i < 10; i++) {
                document.getElementById(`menu_item_${i}`).style.textDecoration = 'none';
            }
            let s = 9;
            create_element('h3', 'h_class', card_field, `You have never been wrong! You will be taken to the main page after <span>10</span> seconds`);
            setInterval(() => {
                card_field.innerHTML = ''; 
                create_element('h3', 'h_class', card_field, `You have never been wrong! You will be taken to the main page after <span>${s--}</span> seconds`);
            }, 1000);
            setTimeout(() => {
                window.location.reload();
            }, 9950);
        } else {
            item = 9;            
            play_train_container.innerHTML = '';
            play_train_container.style.visibility = 'visible';
            if (!play_train) {            
                create_play_train_button();
                document.getElementById('play_train_container_id').className = 'play_train_container_class';                   
            } else {            
                create_play_train_button_play();
                document.getElementById('play_train_container_id').className = 'play_train_play_container_class';            
            } 
            create_new_cards(create_new_list());        
        }
    });
}

for (let i = 0; i < 10; i++) {
    document.getElementById(`menu_item_${i}`).addEventListener('mouseover', () => {
        document.getElementById(`menu_item_${i}`).style.color = 'rgb(192, 225, 255)';
    });
    document.getElementById(`menu_item_${i}`).addEventListener('mouseout', () => {
        document.getElementById(`menu_item_${i}`).style.color = 'white';
    });
}

document.getElementById('menu_item_0').addEventListener('click', () => {
    card_field.innerHTML = '';
    play_train_container.style.visibility = 'visible';
    item = 0;
    create_cards();
    setTimeout(() => {
        document.getElementById('menu_toggle_id').checked = false;
    }, 200);
    for (let i = 0; i < 10; i++) {
        document.getElementById(`menu_item_${i}`).style.textDecoration = 'none';        
    }
    document.getElementById(`menu_item_${item}`).style.textDecoration = 'underline';
});

document.getElementById('menu_item_9').addEventListener('click', () => {
    card_field.innerHTML = '';    
    play_train_container.style.visibility = 'hidden';
    create_statistic_table();
    card_field.className = 'card_field_class table_field_class';
    setTimeout(() => {
        document.getElementById('menu_toggle_id').checked = false;
    }, 200);
    for (let i = 0; i < 10; i++) {
        document.getElementById(`menu_item_${i}`).style.textDecoration = 'none';
    }
    document.getElementById(`menu_item_9`).style.textDecoration = 'underline';
});

document.querySelector('.cover_class').addEventListener('click', () => {
    document.getElementById('menu_toggle_id').checked = false;
});
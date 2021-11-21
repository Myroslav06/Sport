let  trainers=[
    "man", "woman" 
];
let man=[
    "Sergei", 'Igor', 'Max'
];
let lichnoe={ 
    0:'Вік 30',
    1:'Зріст 180',
    2:'Вага 80',
    [Symbol.isConcatSpreadable]: true,
    lenght: 3
};
let Sergei={
    characteristic:"Спецификация - занимается обучением подопечных спортивному плаванию в бассейне на основе разработанных методик. Кроме плавания как такового, он может тренировать прыжкам в воду, синхронному плаванию или водному поло.",
    medals:"Заслуги - 5-кратный чемпион с водного поло, чемпион Киева с плавания на длинные дистанции",   
};
let Igor={
    age:24,
    height:180,
    weight:80,
};
let Max={
    characteristic:"Занимаеться глубоководным спортивным дайвингом без снаряжения",
    medals:'Дайвер з 10-річним стажем',
 };
let Anna={
    characteristic:'8-летний стаж занятий тяжелой атлетикой и толканием ядра',
    medals:'Заслуги - чемпионка мира по тяжелой атлетике в 2018 году',
};
let a;
let b;
let c;
let d;
function one(){
a = prompt("какие тренера интересуют?  man/woman");  
if (a=="man"){
     let guy=prompt("What trainer Sergei/Igor/Max")
        if (guy=="Sergei"){
            for (let key in Sergei){
            alert(Sergei[key] )
          let v =confirm("Готовы записаться к нему");
            if (v==true){
                
            }
        }
    } 
         else if (guy=="Igor"){
            for (let key in Igor){
            alert(key+ " " + Igor[key] )  
        }
}
        else if (guy=='Max'){
            for (let key in Max){
            alert(key+ " " + Max[key])    
            }
        }
        else if (guy==null){
            alert('Перейдем до тренерів жіночої статі')
           let girl=prompt("What trainer Annna/Zina/Victoria")
        if (girl=="Anna"){
            for (var key in Anna){
            alert(Anna[key] )
        }
    }
       }
    }
else if (a=="woman"){
    do {girl=prompt("What trainer Annna/Zina/Victoria")
    }
    while(girl!= 'Annna' && girl!= 'Zina' && girl!= 'Victoria');
    if (girl="Anna"){
        for (var key in Anna){
        alert(Anna[key] )
}
}
}
}
one()
prompt('какой тренер вам по душе?')


const tasks = [
  {title: "Comprar comida para o gato", type: "Urgente"},
  {title: "Consertar Computador", type: "Importante"},
  {title: "Beber água", type: "Normal"},
  {title: "Enviar relatório trimestral", type: "Importante"},
  {title: "Fazer exercícios físicos", type: "Normal"},
  {title: "Agendar consulta médica", type: "Urgente"},
  {title: "Ler pelo menos um capítulo de um livro", type: "Normal"},
  {title: "Limpar a despensa", type: "Importante"},
  {title: "Pagar a conta de energia", type: "Urgente"},
  {title: "Assistir a um documentário interessante", type: "Normal"},
];
// const tasksAll=[];
function createtasks(task){

  const tasksBloc = document.createElement("li");
  const tasksInfo = document.createElement("div");
  const tasksSpan = document.createElement("span");
  const tasksScript = document.createElement("p");
  const tasksDel = document.createElement("button");

tasksBloc.className = "task__item";
tasksInfo.className = "task-info__container";
tasksScript.className = "description";
tasksSpan.classList.add ("task-type");
tasksDel.className = "task__button--remove-task";


tasksScript.innerText = task.title;
if(task.type === "Normal"){
  tasksSpan.classList.add ( "span-normal");
}else if(task.type === "Importante"){
  tasksSpan.classList.add  ("span-important");
}else if(task.type === "Urgente"){
tasksSpan.classList.add  ("span-urgent");
}

tasksDel.addEventListener("click", function(){
  const index = tasks.indexOf(task);

  tasks.splice(index, 1);

  rendertask(tasks);
});

tasksInfo.append(tasksSpan,tasksScript);
tasksBloc.append(tasksInfo,tasksDel);

// tasksAll.append(tasksBloc)
return tasksBloc


};
function rendertask(list){
  const allTasks = document.querySelector(".tasks__list");
  allTasks.innerHTML = ""

  for (let i = 0; i < list.length; i++ ){
    const currentList = list[i];

    const elementList =  createtasks(currentList);

    allTasks.append (elementList);
  }

};

function createNewTasks(){
  const form = document.querySelector(".form__container");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const inputTitle = document.querySelector("#input_title");
    const inputType = document.querySelector("#type_type");
    

    const newTasks = {
      title: inputTitle.value,
      type: inputType.value,
    };
    tasks.push(newTasks);
    rendertask(tasks);
    console.log (newTasks)
   
  });

};

rendertask(tasks);

createNewTasks();
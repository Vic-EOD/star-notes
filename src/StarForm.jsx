import stories from "./stories";

const addStory = (e) => {
  e.preventDefault();
  const newStory = {};
  const newSituation = document.getElementById("situation");
  const newTask = document.getElementById("task");
  const newAction = document.getElementById("action");
  const newResult = document.getElementById("result");
  const newTitle = document.getElementById("title");

  newStory.situation = newSituation.value;
  newStory.task = newTask.value;
  newStory.action = newAction.value;
  newStory.result = newResult.value;
  newStory.id = stories.length + 1;
  newStory.title = newTitle.value;

  stories.push(newStory);
};
const StarForm = () => {
  return (
    <div>
      <form
        className="form flex flex-col gap-6 items-center"
        onSubmit={addStory}
      >
        <label className="self-start text-xl font-bold pr-4" htmlFor="title">
          Title
        </label>
        <input
          placeholder="Title"
          required
          className="rounded h-8 w-full"
          type="text"
          id="title"
          name="title"
        ></input>
        <label className="self-start text-xl font-bold m-0" htmlFor="situation">
          Situation
        </label>
        <textarea
          placeholder="Describe the situation that you were in or the task that you needed to accomplish."
          required
          id="situation"
          name="situation"
          cols="60"
          rows="10"
          className="rounded m-0"
        ></textarea>
        <label className="self-start text-xl font-bold" htmlFor="task">
          Task
        </label>
        <textarea
          placeholder="What goal were you working toward?"
          required
          id="task"
          name="task"
          cols="60"
          rows="10"
          className="rounded"
        ></textarea>
        <label className="self-start text-xl font-bold" htmlFor="action">
          Action
        </label>
        <textarea
          placeholder="Describe the actions you took to address the situation with an appropriate amount of
        detail and keep the focus on YOU."
          required
          id="action"
          name="action"
          cols="60"
          rows="10"
          className="rounded"
        ></textarea>
        <label className="self-start text-xl font-bold" htmlFor="result">
          Result
        </label>
        <textarea
          placeholder="Describe the outcome of your actions and don’t be shy about taking credit for your
          behavior."
          required
          id="result"
          name="result"
          cols="60"
          rows="10"
          className="rounded"
        ></textarea>
        <div>
          <button className="mr-8 py-4 px-8 border text-slate-100 rounded-md border-none bg-slate-800">
            Cancel
          </button>
          <button
            className="py-4 px-8 border rounded-md text-slate-100 border-none bg-slate-800"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default StarForm;

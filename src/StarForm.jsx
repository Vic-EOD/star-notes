const StarForm = () => {
  return (
    <div>
      <form className="form flex flex-col gap-6">
        <div className="flex items-center gap-6">
          <label className="text-xl font-bold" htmlFor="situation">
            Situation
          </label>
          <textarea
            id="situation"
            name="situation"
            cols="60"
            rows="10"
            className="rounded"
          ></textarea>
        </div>
        <div className="flex items-center gap-6">
          <label className="text-xl font-bold" htmlFor="task">
            Task
          </label>
          <textarea
            id="task"
            name="task"
            cols="60"
            rows="10"
            className="rounded"
          ></textarea>
        </div>
        <div className="flex items-center gap-6">
          <label className="text-xl font-bold" htmlFor="action">
            Action
          </label>
          <textarea
            id="action"
            name="action"
            cols="60"
            rows="10"
            className="rounded"
          ></textarea>
        </div>
        <div className="flex items-center gap-6">
          <label className="text-xl font-bold" htmlFor="result">
            Result
          </label>
          <textarea
            id="result"
            name="result"
            cols="60"
            rows="10"
            className="rounded"
          ></textarea>
        </div>
        <div>
          <button className="mx-4 py-4 px-8 border rounded-md border-black bg-indigo-500">
            Cancel
          </button>
          <button
            className="py-4 px-6 border rounded-md border-black bg-indigo-500"
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

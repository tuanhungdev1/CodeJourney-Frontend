interface UserAuthFormProps {
  type: string;
}

const UserAuthForm = ({ type }: UserAuthFormProps) => {
  return (
    <section className="flex items-center justify-center h-cover">
      <form className="w-[80%] max-w-[400px]">
        <h1 className="mb-24 text-4xl text-center capitalize font-gelasio">
          {type}
        </h1>
      </form>
    </section>
  );
};

export default UserAuthForm;

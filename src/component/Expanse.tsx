import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { HStack, Heading } from "@chakra-ui/react";

const schema = z.object({
  title: z
    .string()
    .min(3, { message: "description should be at 3 character" })
    .max(50),
  description: z
    .string()
    .min(3, { message: "description should be at 3 character" })
    .max(50),
});

type FormData = z.infer<typeof schema>;

interface Props {
  onSubmit: (data: FormData) => void;
}

const Expanse = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  return (
    <>
      <Heading className="mx-2" as="h3" size="sm">
        Add to-do Items
      </Heading>
      <form
        onSubmit={handleSubmit((data) => {
          onSubmit(data);
          reset();
        })}
      >
        <HStack className="mx-0">
          <div className="mx-0">
            <input
              {...register("title")}
              id="title"
              type="text"
              className="form-control"
              placeholder="Title"
            />
            {errors.title && (
              <p className="text-danger">{errors.title.message}</p>
            )}
          </div>

          <div>
            <input
              {...register("description")}
              id="description"
              type="text"
              className="form-control"
              placeholder="Description"
            />
            {errors.description && (
              <p className="text-danger">{errors.description.message}</p>
            )}
          </div>
        </HStack>
        <button className="btn btn-primary">Save</button>
      </form>
    </>
  );
};

export default Expanse;

import { gql, useMutation } from "@apollo/client";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

const CREATE_SUBSCRIBER_MUTATION = gql`
  mutation CreateSubscriber($name: String!, $email: String!) {
    createSubscriber(data: { name: $name, email: $email }) {
      id
    }
  }
`;

export const Home = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [createUser, { loading }] = useMutation(CREATE_SUBSCRIBER_MUTATION);

  const handleUser = (event: FormEvent) => {
    event.preventDefault();
    createUser({
      variables: {
        name,
        email,
      },
    });
    navigate("/event");
  };

  return (
    <div
      className="h-screen bg-erural flex items-center 
              bg-gradient-to-r from-gray-500 to-gray-900"
    >
      <div className="px-16 max-w-[80rem] flex flex-col sm:flex-row gap-10
              items-start justify-between mx-auto">

        <div className="p-8 bg-gray-700 border border-gray-500 rounded">
          <strong className="text-lg mb-6 block">
            Cadastre-se para ter acesso ao conteudo
          </strong>
          <form onSubmit={handleUser} className="flex flex-col gap-2 w-full">
            <input
              className="bg-gray-500 rounded px-5 h-14"
              type="text"
              placeholder="Qual seu nome?"
              onChange={(event) => setName(event.target.value)}
            />
            <input
              className="bg-gray-500 rounded px-5 h-14"
              type="email"
              placeholder="Qual seu email?"
              onChange={(event) => setEmail(event.target.value)}
            />
            <button
              type="submit"
              disabled={loading}
              className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:bg-green-300"
            >
              Entrar!!
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

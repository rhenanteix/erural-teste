import { gql, useQuery } from "@apollo/client";
import { Lesson } from "./Lesson";

const GET_LESSONS_QUERY = gql`
  query {
    lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
      id
      title
      slug
      availableAt
      lessonType
    }
  }
`;

interface GetLessonsQueryResponse {
  lessons: {
    id: string;
    title: string;
    slug: string;
    availableAt: string;
    lessonType: "live" | "class";
  }[];
}

export const Sidebar = () => {
  const { data } = useQuery<GetLessonsQueryResponse>(GET_LESSONS_QUERY);
  console.log(data);

  return (
    <aside className="hidden lg:block w-[348px] p-6 border-l border-gray-600
    bg-gradient-to-b from-gray-600 to-gray-900">
      <div className="p-4 rounded-md shadow-gray-600 border border-gray-600 
               bg-gray-900 shadow-md sticky top-6">
        <span className="font-bold text-2xl pb-6 border-b border-gray-500 block">
                Escolha uma aula
        </span>
        <div className="flex flex-col gap-8 pt-8 ">
          {data?.lessons.map((lesson) => {
            return (
              <Lesson
                key={lesson.id}
                title={lesson.title}
                slug={lesson.slug}
                availableAt={new Date(lesson.availableAt)}
                type={lesson.lessonType}
              />
            );
          })}
        </div>
      </div>
    </aside>
  );
};

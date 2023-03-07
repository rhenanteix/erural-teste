import { ArrowFatRight } from "phosphor-react";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

export const Event = () => {
  const { slug } = useParams<{ slug: string }>();
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        {slug ? (
          <Video lessonSlug={slug} />
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <div className="flex flex-col items-center justify-center gap-20">
              <strong className="text-2xl">
                Selecione um vídeo!!!
              </strong>
              <div className="relative">
                <ArrowFatRight className="absolute top-0" size={28} />

                <ArrowFatRight className="animate-ping" size={28} />
              </div>
            </div>
          </div>
        )}
        <Sidebar />
      </main>
    </div>
  );
};

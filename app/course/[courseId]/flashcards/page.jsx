"use client";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import FlashcardItem from "./_components/flashcardItem";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function Flashcards() {
  const { courseId } = useParams();
  const [flashCards, setFlashCards] = useState([]);
  const [isFlipped, setIsFlipped] = useState(false);
  const [api, setApi] = useState(null);

  useEffect(() => {
    GetFlashCards();
  }, []);

  useEffect(() => {
    if (!api) {
      return;
    }
    api.on("select", () => {
      setIsFlipped(false);
    });
  }, [api]);

  const GetFlashCards = async () => {
    try {
      const result = await axios.post("/api/study-type", {
        courseId: courseId,
        studyType: "Flashcard",
      });
      setFlashCards(result?.data);

      console.log("Flashcard", result.data);
    } catch (error) {
      console.error("Error fetching flashcards:", error);
    }
  };

  const handleClick = () => {
    setIsFlipped((prev) => !prev); // Toggle the flip state
  };

  return (
    <div>
      <h2 className="font-bold text-2xl">Flashcards</h2>
      <p>Flashcards: The Ultimate tool to lock in Concepts!</p>

      <div className="mt-8">
        <Carousel setApi={setApi}>
          <CarouselContent>
            {flashCards?.content &&
              flashCards.content?.map((flashcard, index) => {
                return (
                  <CarouselItem
                    key={index}
                    className="flex items-center justify-center"
                  >
                    <FlashcardItem
                      isFlipped={isFlipped}
                      handleClick={handleClick}
                      flashcard={flashcard}
                    />
                  </CarouselItem>
                );
              })}
          </CarouselContent>
          <CarouselNext />
          <CarouselPrevious />
        </Carousel>
      </div>
    </div>
  );
}

export default Flashcards;

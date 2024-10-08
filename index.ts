import courses from "./courses";
import studyGroups from "./studyGroups";

type Course = {
  id: number;
  studyGroupId: number;
  title: string;
  keywords: string[];
  eventType: string;
};

type StudyGroup = {
  id: number;
  courseId: number;
  title: string;
  keywords: string[];
  eventType: string;
};

type SearchEventsOptions = {
  query: string | number;
  eventType: "courses" | "groups";
};

function searchEvents(options: SearchEventsOptions) {
  let events: (Course | StudyGroup)[] = studyGroups;
  if (options.eventType === "courses") {
    events = courses;
  }
  events.filter((event: Course | StudyGroup) => {
    if (typeof options.query === "number") {
      return event.id === options.query;
    }
  });
}

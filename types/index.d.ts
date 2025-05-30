export { }

declare global {
    interface MCQQuestion {
        id: string;
        question: string;
        options: {
            A: string;
            B: string;
            C: string;
            D: string;
        };
        correctAnswer: 'A' | 'B' | 'C' | 'D';
        exam: 'JEE Advanced' | 'JEE Mains' | 'NEET' | 'Other';
        year: number;
        topic: string;
    }

    interface Folder {
        id: string;
        name: string;
        questionIds: string[];
        createdAt: Date;
        updatedAt: Date;
    }

    interface FolderState {
        folders: Folder[];
        currentFolder: string | null; // ID of currently viewed folder
    }

    interface QuestionState {
        allQuestions: MCQQuestion[];
        selectedQuestions: string[]; // array of question IDs
        currentFolderQuestions: string[]; // for the currently viewed folder
    }
}

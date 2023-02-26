const genericNames: Array<string> = ['Tom', 'Marty'];

function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

const firstMergedObjs = merge({ name: 'Tom' }, { age: 30 });
console.log(firstMergedObjs);

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return 'value: ' + obj[key]; 
}
extractAndConvert({ name: 'Max' }, 'name');

class DataStorage<T> {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item)
    }

    removeItem(item: T) {
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems() {
        return [...this.data];
    }
}

interface CourseGoal {
    title: string,
    description: string,
    completeUntil: Date
}

function createCourseGoal(
    title: string,
    description: string,
    date: Date
): CourseGoal {
    let courseGoal: Partial<CourseGoal> = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;

    return courseGoal as CourseGoal;
}
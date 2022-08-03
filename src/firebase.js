import { initializeApp } from "firebase/app";
import { getFirestore, collection, onSnapshot } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB8zNsVkakqqPZDKhmRtHk7uXmla-qG7f4",
  authDomain: "olioni-app.firebaseapp.com",
  projectId: "olioni-app",
  storageBucket: "olioni-app.appspot.com",
  messagingSenderId: "605472208752",
  appId: "1:605472208752:web:9a8a920f63bc26aedcc1b5",
  measurementId: "G-554NC6RSFQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export function getStudents() {
  let studentsResult = []
  let studentsQuery = collection(db, 'students')
  onSnapshot(studentsQuery, (qSnap) => {
    qSnap.forEach((doc) => {
      // studentsResult['array-' + doc.data().student_ID] = doc.data() 
      studentsResult.push((doc.data()))
    })
  })
  console.log(studentsResult)
  return studentsResult
}

export function getProjects() {
  let projectsResult = []
  let projectsQuery = collection(db, 'projects')
  onSnapshot(projectsQuery, (qSnap) => {
    qSnap.forEach((doc) => {
      projectsResult.push(doc.data())
    })
  })
  return projectsResult
}

// export let students = getStudents()
// export let projects = getProjects()
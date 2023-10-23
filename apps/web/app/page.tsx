"use client";

import styles from "../styles/index.module.css";

import { api, useQuery } from "@flimmer/db";

export default function Web() {
  const tasks = useQuery(api.tasks["getTasks"], {});

  return (
    <div className={styles.container}>
      <h1>Web</h1>
      {tasks?.map((task) => (
        <div key={task._id}>{task.text}</div>
      ))}
    </div>
  );
}

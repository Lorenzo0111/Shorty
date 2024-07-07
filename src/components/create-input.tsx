"use client";

import { type FormEvent, useState } from "react";

export default function CreateInput() {
  const [url, setUrl] = useState("");
  const [created, setCreated] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setCreated("");
    setError("");

    fetch("/api/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url }),
    })
      .then((res) => res.json())
      .then((res) => {
        setUrl("");
        console.log(res);

        if (res.error) {
          setError(res.error);
          return;
        }

        setCreated(res.shortCode);
      });
  }

  return (
    <>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex items-center gap-2"
      >
        {created && (
          <div
            className="bg-green-100 border border-green-400 text-green-700 h-10 px-4 rounded relative flex items-center gap-1"
            role="alert"
          >
            <strong className="font-bold">Success!</strong>
            <span className="block sm:inline"> Your short link is: </span>
            <a href={created} className="underline">
              {/* eslint-disable-next-line */}
              {location.protocol}//{location.host}/{created}
            </a>
          </div>
        )}
        {error && (
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 h-10 rounded relative flex items-center gap-1"
            role="alert"
          >
            <strong className="font-bold">Error! </strong>
            <span className="sm:inline">{error}</span>
          </div>
        )}

        <input
          className="rounded-lg bg-white p-2 text-center text-black w-full md:w-80 h-10 invalid:border-2 invalid:border-red-600 invalid:text-red-600"
          type="url"
          placeholder="Insert a link to short"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button
          className="rounded-lg bg-primary p-2 text-center text-black w-full md:w-20 h-10"
          type="submit"
        >
          Short it!
        </button>
      </form>
    </>
  );
}

"use client";

import type { ShortUrl } from "@prisma/client";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "./ui/dialog";
import Link from "next/link";

function deleteLink(shortCode: string) {
  fetch(`/api/links/${shortCode}`, {
    method: "DELETE",
  }).then(() => {
    location.reload();
  });
}

export default function LinkTable({ links }: { links: ShortUrl[] }) {
  const refs = links.reduce((acc, link) => {
    link.refs.forEach((ref) => {
      acc[ref] = (acc[ref] || 0) + 1;
    });
    return acc;
  }, {} as Record<string, number>);

  return (
    <table className="text-center mt-8 w-full">
      <thead>
        <tr>
          <th>Short</th>
          <th>URL</th>
          <th>Clicks</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {links.map((link) => (
          <tr key={link.id}>
            <td>
              <Link className="underline" href={`/${link.shortCode}`}>
                {link.shortCode}
              </Link>
            </td>
            <td>{link.url}</td>
            <td>
              <Dialog>
                <DialogTrigger>{link.hits}</DialogTrigger>
                <DialogContent>
                  <DialogTitle>Referers</DialogTitle>
                  <ul>
                    {link.refs.map((ref) => (
                      <li key={ref}>
                        {ref} ({refs[ref]})
                      </li>
                    ))}
                  </ul>
                </DialogContent>
              </Dialog>
            </td>
            <td>
              <Button
                onClick={() => deleteLink(link.shortCode)}
                variant="destructive"
              >
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

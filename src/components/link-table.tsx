"use client";

import type { ShortUrl } from "@prisma/client";

function deleteLink(shortCode: string) {
  fetch(`/api/links/${shortCode}`, {
    method: "DELETE",
  }).then(() => {
    location.reload();
  });
}

export default function LinkTable({ links }: { links: ShortUrl[] }) {
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
            <td>{link.shortCode}</td>
            <td>{link.url}</td>
            <td>{link.hits}</td>
            <td>
              <button
                onClick={() => deleteLink(link.shortCode)}
                className="p-2 bg-red-400 rounded-xl"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

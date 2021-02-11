const getFeedStub = {
  title: "Song Exploder",
  author: "Hrishikesh Hirway",
  description:
    "Song Exploder is a podcast where musicians take apart their songs, and piece by piece, tell the story of how they were made. Each episode features an artist discussing a song of theirs, breaking down the sounds and ideas that went into the writing and recording. Hosted and produced by Hrishikesh Hirway.",
  img:
    "https://f.prxu.org/song-exploder/images/f648851c-d36e-4342-8a9f-521df2fc7a62/songexploder-logo.png",
  episodes: Array(10)
    .fill(0)
    .map((_, idx) => ({
      id: "id_" + idx,
      title: "title_" + idx,
      date: "Tue, 09 Feb 2021 05:00:00 -0000",
      description: "<p>description_" + idx + "</p>",
      duration: 3600,
      media: {
        url: "http://url_" + idx,
        type: "type_" + idx,
      },
    })),
};

export default getFeedStub;

let embedder;

export async function getEmbedding(text) {

  try {

    const { pipeline } = await import("@xenova/transformers");

    if (!embedder) {
      embedder = await pipeline(
        "feature-extraction",
        "Xenova/all-MiniLM-L6-v2"
      );
    }

    const result = await embedder(text);

    return result.data;

  } catch (err) {

    console.log("AI embedding unavailable:", err.message);

    return [];

  }

}

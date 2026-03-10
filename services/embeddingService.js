let embedder = null;

export async function getEmbedding(text) {

  try {

    const { pipeline } = await import("@xenova/transformers");

    if (!embedder) {

      console.log("Loading embedding model...");

      embedder = await pipeline(
        "feature-extraction",
        "Xenova/all-MiniLM-L6-v2"
      );

      console.log("Embedding model loaded");
    }

    const output = await embedder(text);

    // Convert tensor to plain array
    const embedding = Array.from(output.data);

    return embedding;

  } catch (err) {

    console.error("AI embedding unavailable:", err.message);

    return [];

  }

}

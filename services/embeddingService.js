let embedder = null;

export async function getEmbedding(text) {

  try {

    const { pipeline } = await import("@xenova/transformers");

    if (!embedder) {

      console.log("Initializing AI model...");

      embedder = await pipeline(
        "feature-extraction",
        "Xenova/all-MiniLM-L6-v2"
      );

    }

    const result = await embedder(text);

    return Array.from(result.data);

  } catch (err) {

    console.error("Embedding service unavailable:", err.message);

    return [];

  }

}

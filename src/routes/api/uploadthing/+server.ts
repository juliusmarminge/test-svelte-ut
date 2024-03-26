import { env } from "$env/dynamic/private";
import { uploadRouter } from "$lib/server/uploadthing";

import { createRouteHandler } from "uploadthing/server";

// The Svelte extension complains if you export the handlers directly
const { GET, POST } = createRouteHandler({
  router: uploadRouter,
  config: {
    // callbackUrl: `http://localhost:${env.PORT ?? 5173}/api/uploadthing`,
    uploadthingId: env.UPLOADTHING_APP_ID,
    uploadthingSecret: env.UPLOADTHING_SECRET,
  },
});

export { GET, POST };

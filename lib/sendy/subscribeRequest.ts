/**
 * Sendy returns plain text `true` (docs) or `1` (common in the wild) on success.
 * @see https://sendy.co/api — Subscribe
 */
export function isSendySubscribeSuccess(body: string): boolean {
    const t = body.trim().toLowerCase();
    return t === "true" || t === "1";
}

export async function sendySubscribeRequest(params: {
    email: string;
    listId: string;
    referer?: string;
    ip?: string;
}): Promise<{ ok: true; body: string } | { ok: false; kind: "network" }> {
    const baseUrl = process.env.SENDY_BASE_URL?.replace(/\/$/, "");
    const apiKey = process.env.SENDY_API_KEY?.trim();

    if (!baseUrl || !apiKey) {
        return { ok: false, kind: "network" };
    }

    const searchParams = new URLSearchParams({
        api_key: apiKey,
        email: params.email,
        list: params.listId,
        boolean: "true",
    });
    if (params.ip) {
        searchParams.set("ipaddress", params.ip);
    }
    if (params.referer) {
        searchParams.set("referrer", params.referer);
    }

    const subscribeUrl = `${baseUrl}/subscribe`;

    try {
        const res = await fetch(subscribeUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: searchParams.toString(),
        });
        const body = (await res.text()).trim();
        return { ok: true, body };
    } catch {
        return { ok: false, kind: "network" };
    }
}

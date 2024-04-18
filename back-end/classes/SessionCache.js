class SessionCache {
    constructor() {
        // use map because O(1) lookup time
        this.cache = new Map();
        console.log('SessionCache initialized');
    }

    addSession(sessionId, username) {
        if (!this.getSession(sessionId)) {
            // 7 days
            const expiresAt = Date.now() + 7 * 24 * 60 * 60 * 1000;
            this.cache.set(sessionId, { username, expiresAt });
        }
    }

    getSession(sessionId) {
        const session = this.cache.get(sessionId);
        if (session && session.expiresAt > Date.now()) {
            return session;
        } else {
            this.cache.delete(sessionId);
            return null;
        }
    }

    removeSession(sessionId) {
        this.cache.delete(sessionId);
    }

    print() {
        for (let [sessionId, data] of this.cache.entries()) {
            console.log(sessionId, data);
        }
    }

    length() {
        return this.cache.size;
    }

    clearExpiredSessions() {
        const now = Date.now();
        for (let [sessionId, data] of this.cache.entries()) {
            if (data.expiresAt <= now) {
                this.cache.delete(sessionId);
            }
        }
    }
}

module.exports = new SessionCache();

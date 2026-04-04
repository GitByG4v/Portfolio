const GITHUB_CONFIG = {
    owner: 'GitByG4v',
    repo: 'Portfolio',
    path: 'data/content.json',
    branch: 'main'
};

class GitHubAPI {
    constructor(token) {
        this.token = token;
        this.baseApiUrl = `https://api.github.com/repos/${GITHUB_CONFIG.owner}/${GITHUB_CONFIG.repo}/contents`;
        this.jsonPath = GITHUB_CONFIG.path;
    }

    async getFile(path = this.jsonPath) {
        const response = await fetch(`${this.baseApiUrl}/${path}`, {
            headers: {
                'Authorization': `token ${this.token}`,
                'Accept': 'application/vnd.github.v3+json'
            }
        });
        if (!response.ok) throw new Error('Failed to fetch file from GitHub');
        return await response.json();
    }

    async updateFile(content, message = 'Update portfolio content', path = this.jsonPath) {
        let sha;
        try {
            const fileData = await this.getFile(path);
            sha = fileData.sha;
        } catch (e) {
            sha = null; // New file
        }

        const response = await fetch(`${this.baseApiUrl}/${path}`, {
            method: 'PUT',
            headers: {
                'Authorization': `token ${this.token}`,
                'Content-Type': 'application/json',
                'Accept': 'application/vnd.github.v3+json'
            },
            body: JSON.stringify({
                message: message,
                content: btoa(unescape(encodeURIComponent(JSON.stringify(content, null, 4)))),
                sha: sha,
                branch: GITHUB_CONFIG.branch
            })
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message || 'Failed to update file on GitHub');
        }

        return await response.json();
    }

    async uploadFile(base64Content, fileName, folder = 'uploads') {
        const path = `img/${folder}/${fileName}`;
        let sha;
        try {
            const fileData = await this.getFile(path);
            sha = fileData.sha;
        } catch (e) { sha = null; }

        const response = await fetch(`${this.baseApiUrl}/${path}`, {
            method: 'PUT',
            headers: {
                'Authorization': `token ${this.token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                message: `Upload file: ${fileName}`,
                content: base64Content,
                sha: sha,
                branch: GITHUB_CONFIG.branch
            })
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message || 'Failed to upload file to GitHub');
        }

        const data = await response.json();
        return data.content.download_url;
    }

    // Keep alias for compatibility
    async uploadImage(base64Content, fileName) {
        return this.uploadFile(base64Content, fileName, 'uploads');
    }
}

// GitHub API Global Interface for Local File Compatibility
window.GitHubAPI = GitHubAPI;

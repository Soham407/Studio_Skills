/**
 * agentic-seo - Programmatic API
 *
 * Usage:
 *   import { audit, auditUrl } from 'agentic-seo';
 *
 *   const report = await audit('./my-site');
 *   console.log(report.grade); // 'B'
 *   console.log(report.percentage); // 78
 */

import { resolve } from 'node:path';
import { runAudit } from './runner.js';
import { findOutputDir } from './detector.js';
import { loadConfig } from './utils.js';
import { startServer } from './server.js';

export { checkers, categories, getChecker } from './checkers/index.js';
export { countTokens, classifyTokenCount, TOKEN_THRESHOLDS } from './tokenizer.js';
export { detectFramework, findOutputDir } from './detector.js';

/**
 * Audit a local directory for AEO compliance.
 *
 * @param {string} dir - Path to the site directory
 * @param {object} options - { checks, config }
 * @returns {Promise<object>} Audit report
 */
export async function audit(dir, options = {}) {
  const resolvedDir = resolve(dir);
  const config = { ...await loadConfig(resolvedDir), ...options.config };
  const detection = await findOutputDir(resolvedDir);
  const auditDir = detection.dir || resolvedDir;

  const context = {
    dir: auditDir,
    projectDir: resolvedDir,
    url: null,
    config,
  };

  return runAudit(context, {
    checkerIds: options.checks,
    onProgress: options.onProgress,
  });
}

/**
 * Audit a local directory by spinning up a server first.
 *
 * @param {string} dir - Path to the site directory
 * @param {object} options - { checks, config, port }
 * @returns {Promise<object>} Audit report
 */
export async function auditWithServer(dir, options = {}) {
  const resolvedDir = resolve(dir);
  const config = { ...await loadConfig(resolvedDir), ...options.config };
  const detection = await findOutputDir(resolvedDir);
  const auditDir = detection.dir || resolvedDir;

  const server = await startServer(auditDir, options.port || 0);

  try {
    const context = {
      dir: auditDir,
      projectDir: resolvedDir,
      url: server.url,
      config,
    };

    return await runAudit(context, {
      checkerIds: options.checks,
      onProgress: options.onProgress,
    });
  } finally {
    await server.close();
  }
}

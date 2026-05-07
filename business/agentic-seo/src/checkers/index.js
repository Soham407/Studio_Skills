import * as robotsTxt from './robots-txt.js';
import * as llmsTxt from './llms-txt.js';
import * as agentsMd from './agents-md.js';
import * as tokenBudget from './token-budget.js';
import * as contentStructure from './content-structure.js';
import * as markdownAvailability from './markdown-availability.js';
import * as metaTags from './meta-tags.js';
import * as skillMd from './skill-md.js';
import * as agentPermissions from './agent-permissions.js';
import * as copyForAi from './copy-for-ai.js';

/**
 * All available checkers, ordered by category and priority.
 */
export const checkers = [
  // Discovery
  robotsTxt,
  llmsTxt,
  agentsMd,

  // Content Structure
  contentStructure,
  markdownAvailability,

  // Token Economics
  tokenBudget,
  metaTags,

  // Capability Signaling
  skillMd,
  agentPermissions,

  // UX Bridge
  copyForAi,
];

/**
 * Category definitions with max scores and descriptions.
 */
export const categories = {
  discovery: {
    name: 'Discovery',
    description: 'Can agents find your documentation?',
    maxScore: 25,
  },
  'content-structure': {
    name: 'Content Structure',
    description: 'Is content machine-readable and well-organized?',
    maxScore: 25,
  },
  'token-economics': {
    name: 'Token Economics',
    description: 'Does content fit within agent context windows?',
    maxScore: 25,
  },
  'capability-signaling': {
    name: 'Capability Signaling',
    description: 'Can agents understand what your APIs do?',
    maxScore: 15,
  },
  'ux-bridge': {
    name: 'UX Bridge',
    description: 'Does the UX support human-agent workflows?',
    maxScore: 10,
  },
};

/**
 * Get a checker by ID.
 */
export function getChecker(id) {
  return checkers.find((c) => c.meta.id === id);
}

/**
 * Get all checkers for a category.
 */
export function getCheckersByCategory(category) {
  return checkers.filter((c) => c.meta.category === category);
}

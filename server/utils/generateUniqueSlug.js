const slugify = require('slugify');

/**
 * Generates a unique slug for a given name and Mongoose model.
 *
 * @param {String} name - The name to generate the slug from.
 * @param {Mongoose.Model} Model - The Mongoose model to check for existing slugs.
 * @param {String} slugField - The field in the model used to store slugs. Default is 'slug'.
 * @returns {Promise<String>} A unique slug.
 */
const generateUniqueSlug = async (name, Model, slugField = 'slug') => {
  const baseSlug = slugify(name, { lower: true, strict: true });
  let slug = baseSlug;
  let counter = 1;

  const slugExists = async (s) => {
    const query = {};
    query[slugField] = s;
    return await Model.exists(query);
  };

  while (await slugExists(slug)) {
    slug = `${baseSlug}-${counter}`;
    counter++;
  }

  return slug;
};

module.exports = generateUniqueSlug;

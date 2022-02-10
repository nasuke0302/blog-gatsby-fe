export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type AvifOptions = {
  lossless?: InputMaybe<Scalars['Boolean']>;
  quality?: InputMaybe<Scalars['Int']>;
  speed?: InputMaybe<Scalars['Int']>;
};

export type BlurredOptions = {
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  toFormat?: InputMaybe<ImageFormat>;
  /** Width of the generated low-res preview. Default is 20px */
  width?: InputMaybe<Scalars['Int']>;
};

export type BooleanQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  ne?: InputMaybe<Scalars['Boolean']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
};

export type DateQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Date']>;
  gt?: InputMaybe<Scalars['Date']>;
  gte?: InputMaybe<Scalars['Date']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  lt?: InputMaybe<Scalars['Date']>;
  lte?: InputMaybe<Scalars['Date']>;
  ne?: InputMaybe<Scalars['Date']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
};

export type Directory = Node & {
  __typename?: 'Directory';
  absolutePath: Scalars['String'];
  accessTime: Scalars['Date'];
  atime: Scalars['Date'];
  atimeMs: Scalars['Float'];
  base: Scalars['String'];
  birthTime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  changeTime: Scalars['Date'];
  children: Array<Node>;
  ctime: Scalars['Date'];
  ctimeMs: Scalars['Float'];
  dev: Scalars['Int'];
  dir: Scalars['String'];
  ext: Scalars['String'];
  extension: Scalars['String'];
  gid: Scalars['Int'];
  id: Scalars['ID'];
  ino: Scalars['Float'];
  internal: Internal;
  mode: Scalars['Int'];
  modifiedTime: Scalars['Date'];
  mtime: Scalars['Date'];
  mtimeMs: Scalars['Float'];
  name: Scalars['String'];
  nlink: Scalars['Int'];
  parent?: Maybe<Node>;
  prettySize: Scalars['String'];
  rdev: Scalars['Int'];
  relativeDirectory: Scalars['String'];
  relativePath: Scalars['String'];
  root: Scalars['String'];
  size: Scalars['Int'];
  sourceInstanceName: Scalars['String'];
  uid: Scalars['Int'];
};


export type DirectoryAccessTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryModifiedTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type DirectoryConnection = {
  __typename?: 'DirectoryConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<DirectoryEdge>;
  group: Array<DirectoryGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionGroupArgs = {
  field: DirectoryFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type DirectoryConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  __typename?: 'DirectoryEdge';
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export enum DirectoryFieldsEnum {
  absolutePath = 'absolutePath',
  accessTime = 'accessTime',
  atime = 'atime',
  atimeMs = 'atimeMs',
  base = 'base',
  birthTime = 'birthTime',
  birthtime = 'birthtime',
  birthtimeMs = 'birthtimeMs',
  changeTime = 'changeTime',
  children = 'children',
  children___children = 'children___children',
  children___children___children = 'children___children___children',
  children___children___children___children = 'children___children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___id = 'children___children___id',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___children___parent___children = 'children___children___parent___children',
  children___children___parent___id = 'children___children___parent___id',
  children___id = 'children___id',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  children___parent___children = 'children___parent___children',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___id = 'children___parent___id',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___parent___id = 'children___parent___parent___id',
  ctime = 'ctime',
  ctimeMs = 'ctimeMs',
  dev = 'dev',
  dir = 'dir',
  ext = 'ext',
  extension = 'extension',
  gid = 'gid',
  id = 'id',
  ino = 'ino',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  mode = 'mode',
  modifiedTime = 'modifiedTime',
  mtime = 'mtime',
  mtimeMs = 'mtimeMs',
  name = 'name',
  nlink = 'nlink',
  parent___children = 'parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___id = 'parent___children___id',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___id = 'parent___id',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___parent___id = 'parent___parent___parent___id',
  prettySize = 'prettySize',
  rdev = 'rdev',
  relativeDirectory = 'relativeDirectory',
  relativePath = 'relativePath',
  root = 'root',
  size = 'size',
  sourceInstanceName = 'sourceInstanceName',
  uid = 'uid'
}

export type DirectoryFilterInput = {
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
};

export type DirectoryGroupConnection = {
  __typename?: 'DirectoryGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<DirectoryEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<DirectoryGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type DirectoryGroupConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionGroupArgs = {
  field: DirectoryFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type DirectoryGroupConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectorySortInput = {
  fields?: InputMaybe<Array<InputMaybe<DirectoryFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type DuotoneGradient = {
  highlight: Scalars['String'];
  opacity?: InputMaybe<Scalars['Int']>;
  shadow: Scalars['String'];
};

export type File = Node & {
  __typename?: 'File';
  absolutePath: Scalars['String'];
  accessTime: Scalars['Date'];
  atime: Scalars['Date'];
  atimeMs: Scalars['Float'];
  base: Scalars['String'];
  birthTime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  changeTime: Scalars['Date'];
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  childImageSharp?: Maybe<ImageSharp>;
  children: Array<Node>;
  /** Returns all children nodes filtered by type ImageSharp */
  childrenImageSharp?: Maybe<Array<Maybe<ImageSharp>>>;
  ctime: Scalars['Date'];
  ctimeMs: Scalars['Float'];
  dev: Scalars['Int'];
  dir: Scalars['String'];
  ext: Scalars['String'];
  extension: Scalars['String'];
  gid: Scalars['Int'];
  id: Scalars['ID'];
  ino: Scalars['Float'];
  internal: Internal;
  mode: Scalars['Int'];
  modifiedTime: Scalars['Date'];
  mtime: Scalars['Date'];
  mtimeMs: Scalars['Float'];
  name: Scalars['String'];
  nlink: Scalars['Int'];
  parent?: Maybe<Node>;
  prettySize: Scalars['String'];
  rdev: Scalars['Int'];
  relativeDirectory: Scalars['String'];
  relativePath: Scalars['String'];
  root: Scalars['String'];
  size: Scalars['Int'];
  sourceInstanceName: Scalars['String'];
  uid: Scalars['Int'];
};


export type FileAccessTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileModifiedTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type FileConnection = {
  __typename?: 'FileConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<FileEdge>;
  group: Array<FileGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionGroupArgs = {
  field: FileFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type FileConnectionMaxArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionMinArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionSumArgs = {
  field: FileFieldsEnum;
};

export type FileEdge = {
  __typename?: 'FileEdge';
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export enum FileFieldsEnum {
  absolutePath = 'absolutePath',
  accessTime = 'accessTime',
  atime = 'atime',
  atimeMs = 'atimeMs',
  base = 'base',
  birthTime = 'birthTime',
  birthtime = 'birthtime',
  birthtimeMs = 'birthtimeMs',
  changeTime = 'changeTime',
  childImageSharp___children = 'childImageSharp___children',
  childImageSharp___children___children = 'childImageSharp___children___children',
  childImageSharp___children___children___children = 'childImageSharp___children___children___children',
  childImageSharp___children___children___id = 'childImageSharp___children___children___id',
  childImageSharp___children___id = 'childImageSharp___children___id',
  childImageSharp___children___internal___content = 'childImageSharp___children___internal___content',
  childImageSharp___children___internal___contentDigest = 'childImageSharp___children___internal___contentDigest',
  childImageSharp___children___internal___description = 'childImageSharp___children___internal___description',
  childImageSharp___children___internal___fieldOwners = 'childImageSharp___children___internal___fieldOwners',
  childImageSharp___children___internal___ignoreType = 'childImageSharp___children___internal___ignoreType',
  childImageSharp___children___internal___mediaType = 'childImageSharp___children___internal___mediaType',
  childImageSharp___children___internal___owner = 'childImageSharp___children___internal___owner',
  childImageSharp___children___internal___type = 'childImageSharp___children___internal___type',
  childImageSharp___children___parent___children = 'childImageSharp___children___parent___children',
  childImageSharp___children___parent___id = 'childImageSharp___children___parent___id',
  childImageSharp___fixed___aspectRatio = 'childImageSharp___fixed___aspectRatio',
  childImageSharp___fixed___base64 = 'childImageSharp___fixed___base64',
  childImageSharp___fixed___height = 'childImageSharp___fixed___height',
  childImageSharp___fixed___originalName = 'childImageSharp___fixed___originalName',
  childImageSharp___fixed___src = 'childImageSharp___fixed___src',
  childImageSharp___fixed___srcSet = 'childImageSharp___fixed___srcSet',
  childImageSharp___fixed___srcSetWebp = 'childImageSharp___fixed___srcSetWebp',
  childImageSharp___fixed___srcWebp = 'childImageSharp___fixed___srcWebp',
  childImageSharp___fixed___tracedSVG = 'childImageSharp___fixed___tracedSVG',
  childImageSharp___fixed___width = 'childImageSharp___fixed___width',
  childImageSharp___fluid___aspectRatio = 'childImageSharp___fluid___aspectRatio',
  childImageSharp___fluid___base64 = 'childImageSharp___fluid___base64',
  childImageSharp___fluid___originalImg = 'childImageSharp___fluid___originalImg',
  childImageSharp___fluid___originalName = 'childImageSharp___fluid___originalName',
  childImageSharp___fluid___presentationHeight = 'childImageSharp___fluid___presentationHeight',
  childImageSharp___fluid___presentationWidth = 'childImageSharp___fluid___presentationWidth',
  childImageSharp___fluid___sizes = 'childImageSharp___fluid___sizes',
  childImageSharp___fluid___src = 'childImageSharp___fluid___src',
  childImageSharp___fluid___srcSet = 'childImageSharp___fluid___srcSet',
  childImageSharp___fluid___srcSetWebp = 'childImageSharp___fluid___srcSetWebp',
  childImageSharp___fluid___srcWebp = 'childImageSharp___fluid___srcWebp',
  childImageSharp___fluid___tracedSVG = 'childImageSharp___fluid___tracedSVG',
  childImageSharp___gatsbyImageData = 'childImageSharp___gatsbyImageData',
  childImageSharp___id = 'childImageSharp___id',
  childImageSharp___internal___content = 'childImageSharp___internal___content',
  childImageSharp___internal___contentDigest = 'childImageSharp___internal___contentDigest',
  childImageSharp___internal___description = 'childImageSharp___internal___description',
  childImageSharp___internal___fieldOwners = 'childImageSharp___internal___fieldOwners',
  childImageSharp___internal___ignoreType = 'childImageSharp___internal___ignoreType',
  childImageSharp___internal___mediaType = 'childImageSharp___internal___mediaType',
  childImageSharp___internal___owner = 'childImageSharp___internal___owner',
  childImageSharp___internal___type = 'childImageSharp___internal___type',
  childImageSharp___original___height = 'childImageSharp___original___height',
  childImageSharp___original___src = 'childImageSharp___original___src',
  childImageSharp___original___width = 'childImageSharp___original___width',
  childImageSharp___parent___children = 'childImageSharp___parent___children',
  childImageSharp___parent___children___children = 'childImageSharp___parent___children___children',
  childImageSharp___parent___children___id = 'childImageSharp___parent___children___id',
  childImageSharp___parent___id = 'childImageSharp___parent___id',
  childImageSharp___parent___internal___content = 'childImageSharp___parent___internal___content',
  childImageSharp___parent___internal___contentDigest = 'childImageSharp___parent___internal___contentDigest',
  childImageSharp___parent___internal___description = 'childImageSharp___parent___internal___description',
  childImageSharp___parent___internal___fieldOwners = 'childImageSharp___parent___internal___fieldOwners',
  childImageSharp___parent___internal___ignoreType = 'childImageSharp___parent___internal___ignoreType',
  childImageSharp___parent___internal___mediaType = 'childImageSharp___parent___internal___mediaType',
  childImageSharp___parent___internal___owner = 'childImageSharp___parent___internal___owner',
  childImageSharp___parent___internal___type = 'childImageSharp___parent___internal___type',
  childImageSharp___parent___parent___children = 'childImageSharp___parent___parent___children',
  childImageSharp___parent___parent___id = 'childImageSharp___parent___parent___id',
  childImageSharp___resize___aspectRatio = 'childImageSharp___resize___aspectRatio',
  childImageSharp___resize___height = 'childImageSharp___resize___height',
  childImageSharp___resize___originalName = 'childImageSharp___resize___originalName',
  childImageSharp___resize___src = 'childImageSharp___resize___src',
  childImageSharp___resize___tracedSVG = 'childImageSharp___resize___tracedSVG',
  childImageSharp___resize___width = 'childImageSharp___resize___width',
  children = 'children',
  childrenImageSharp = 'childrenImageSharp',
  childrenImageSharp___children = 'childrenImageSharp___children',
  childrenImageSharp___children___children = 'childrenImageSharp___children___children',
  childrenImageSharp___children___children___children = 'childrenImageSharp___children___children___children',
  childrenImageSharp___children___children___id = 'childrenImageSharp___children___children___id',
  childrenImageSharp___children___id = 'childrenImageSharp___children___id',
  childrenImageSharp___children___internal___content = 'childrenImageSharp___children___internal___content',
  childrenImageSharp___children___internal___contentDigest = 'childrenImageSharp___children___internal___contentDigest',
  childrenImageSharp___children___internal___description = 'childrenImageSharp___children___internal___description',
  childrenImageSharp___children___internal___fieldOwners = 'childrenImageSharp___children___internal___fieldOwners',
  childrenImageSharp___children___internal___ignoreType = 'childrenImageSharp___children___internal___ignoreType',
  childrenImageSharp___children___internal___mediaType = 'childrenImageSharp___children___internal___mediaType',
  childrenImageSharp___children___internal___owner = 'childrenImageSharp___children___internal___owner',
  childrenImageSharp___children___internal___type = 'childrenImageSharp___children___internal___type',
  childrenImageSharp___children___parent___children = 'childrenImageSharp___children___parent___children',
  childrenImageSharp___children___parent___id = 'childrenImageSharp___children___parent___id',
  childrenImageSharp___fixed___aspectRatio = 'childrenImageSharp___fixed___aspectRatio',
  childrenImageSharp___fixed___base64 = 'childrenImageSharp___fixed___base64',
  childrenImageSharp___fixed___height = 'childrenImageSharp___fixed___height',
  childrenImageSharp___fixed___originalName = 'childrenImageSharp___fixed___originalName',
  childrenImageSharp___fixed___src = 'childrenImageSharp___fixed___src',
  childrenImageSharp___fixed___srcSet = 'childrenImageSharp___fixed___srcSet',
  childrenImageSharp___fixed___srcSetWebp = 'childrenImageSharp___fixed___srcSetWebp',
  childrenImageSharp___fixed___srcWebp = 'childrenImageSharp___fixed___srcWebp',
  childrenImageSharp___fixed___tracedSVG = 'childrenImageSharp___fixed___tracedSVG',
  childrenImageSharp___fixed___width = 'childrenImageSharp___fixed___width',
  childrenImageSharp___fluid___aspectRatio = 'childrenImageSharp___fluid___aspectRatio',
  childrenImageSharp___fluid___base64 = 'childrenImageSharp___fluid___base64',
  childrenImageSharp___fluid___originalImg = 'childrenImageSharp___fluid___originalImg',
  childrenImageSharp___fluid___originalName = 'childrenImageSharp___fluid___originalName',
  childrenImageSharp___fluid___presentationHeight = 'childrenImageSharp___fluid___presentationHeight',
  childrenImageSharp___fluid___presentationWidth = 'childrenImageSharp___fluid___presentationWidth',
  childrenImageSharp___fluid___sizes = 'childrenImageSharp___fluid___sizes',
  childrenImageSharp___fluid___src = 'childrenImageSharp___fluid___src',
  childrenImageSharp___fluid___srcSet = 'childrenImageSharp___fluid___srcSet',
  childrenImageSharp___fluid___srcSetWebp = 'childrenImageSharp___fluid___srcSetWebp',
  childrenImageSharp___fluid___srcWebp = 'childrenImageSharp___fluid___srcWebp',
  childrenImageSharp___fluid___tracedSVG = 'childrenImageSharp___fluid___tracedSVG',
  childrenImageSharp___gatsbyImageData = 'childrenImageSharp___gatsbyImageData',
  childrenImageSharp___id = 'childrenImageSharp___id',
  childrenImageSharp___internal___content = 'childrenImageSharp___internal___content',
  childrenImageSharp___internal___contentDigest = 'childrenImageSharp___internal___contentDigest',
  childrenImageSharp___internal___description = 'childrenImageSharp___internal___description',
  childrenImageSharp___internal___fieldOwners = 'childrenImageSharp___internal___fieldOwners',
  childrenImageSharp___internal___ignoreType = 'childrenImageSharp___internal___ignoreType',
  childrenImageSharp___internal___mediaType = 'childrenImageSharp___internal___mediaType',
  childrenImageSharp___internal___owner = 'childrenImageSharp___internal___owner',
  childrenImageSharp___internal___type = 'childrenImageSharp___internal___type',
  childrenImageSharp___original___height = 'childrenImageSharp___original___height',
  childrenImageSharp___original___src = 'childrenImageSharp___original___src',
  childrenImageSharp___original___width = 'childrenImageSharp___original___width',
  childrenImageSharp___parent___children = 'childrenImageSharp___parent___children',
  childrenImageSharp___parent___children___children = 'childrenImageSharp___parent___children___children',
  childrenImageSharp___parent___children___id = 'childrenImageSharp___parent___children___id',
  childrenImageSharp___parent___id = 'childrenImageSharp___parent___id',
  childrenImageSharp___parent___internal___content = 'childrenImageSharp___parent___internal___content',
  childrenImageSharp___parent___internal___contentDigest = 'childrenImageSharp___parent___internal___contentDigest',
  childrenImageSharp___parent___internal___description = 'childrenImageSharp___parent___internal___description',
  childrenImageSharp___parent___internal___fieldOwners = 'childrenImageSharp___parent___internal___fieldOwners',
  childrenImageSharp___parent___internal___ignoreType = 'childrenImageSharp___parent___internal___ignoreType',
  childrenImageSharp___parent___internal___mediaType = 'childrenImageSharp___parent___internal___mediaType',
  childrenImageSharp___parent___internal___owner = 'childrenImageSharp___parent___internal___owner',
  childrenImageSharp___parent___internal___type = 'childrenImageSharp___parent___internal___type',
  childrenImageSharp___parent___parent___children = 'childrenImageSharp___parent___parent___children',
  childrenImageSharp___parent___parent___id = 'childrenImageSharp___parent___parent___id',
  childrenImageSharp___resize___aspectRatio = 'childrenImageSharp___resize___aspectRatio',
  childrenImageSharp___resize___height = 'childrenImageSharp___resize___height',
  childrenImageSharp___resize___originalName = 'childrenImageSharp___resize___originalName',
  childrenImageSharp___resize___src = 'childrenImageSharp___resize___src',
  childrenImageSharp___resize___tracedSVG = 'childrenImageSharp___resize___tracedSVG',
  childrenImageSharp___resize___width = 'childrenImageSharp___resize___width',
  children___children = 'children___children',
  children___children___children = 'children___children___children',
  children___children___children___children = 'children___children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___id = 'children___children___id',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___children___parent___children = 'children___children___parent___children',
  children___children___parent___id = 'children___children___parent___id',
  children___id = 'children___id',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  children___parent___children = 'children___parent___children',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___id = 'children___parent___id',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___parent___id = 'children___parent___parent___id',
  ctime = 'ctime',
  ctimeMs = 'ctimeMs',
  dev = 'dev',
  dir = 'dir',
  ext = 'ext',
  extension = 'extension',
  gid = 'gid',
  id = 'id',
  ino = 'ino',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  mode = 'mode',
  modifiedTime = 'modifiedTime',
  mtime = 'mtime',
  mtimeMs = 'mtimeMs',
  name = 'name',
  nlink = 'nlink',
  parent___children = 'parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___id = 'parent___children___id',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___id = 'parent___id',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___parent___id = 'parent___parent___parent___id',
  prettySize = 'prettySize',
  rdev = 'rdev',
  relativeDirectory = 'relativeDirectory',
  relativePath = 'relativePath',
  root = 'root',
  size = 'size',
  sourceInstanceName = 'sourceInstanceName',
  uid = 'uid'
}

export type FileFilterInput = {
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  childImageSharp?: InputMaybe<ImageSharpFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  childrenImageSharp?: InputMaybe<ImageSharpFilterListInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
};

export type FileGroupConnection = {
  __typename?: 'FileGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<FileEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<FileGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type FileGroupConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionGroupArgs = {
  field: FileFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type FileGroupConnectionMaxArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionMinArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionSumArgs = {
  field: FileFieldsEnum;
};

export type FileSortInput = {
  fields?: InputMaybe<Array<InputMaybe<FileFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export enum GatsbyImageFormat {
  AUTO = 'AUTO',
  AVIF = 'AVIF',
  JPG = 'JPG',
  NO_CHANGE = 'NO_CHANGE',
  PNG = 'PNG',
  WEBP = 'WEBP'
}

export enum GatsbyImageLayout {
  CONSTRAINED = 'CONSTRAINED',
  FIXED = 'FIXED',
  FULL_WIDTH = 'FULL_WIDTH'
}

export enum GatsbyImagePlaceholder {
  BLURRED = 'BLURRED',
  DOMINANT_COLOR = 'DOMINANT_COLOR',
  NONE = 'NONE',
  TRACED_SVG = 'TRACED_SVG'
}

export enum ImageCropFocus {
  ATTENTION = 'ATTENTION',
  CENTER = 'CENTER',
  EAST = 'EAST',
  ENTROPY = 'ENTROPY',
  NORTH = 'NORTH',
  NORTHEAST = 'NORTHEAST',
  NORTHWEST = 'NORTHWEST',
  SOUTH = 'SOUTH',
  SOUTHEAST = 'SOUTHEAST',
  SOUTHWEST = 'SOUTHWEST',
  WEST = 'WEST'
}

export enum ImageFit {
  CONTAIN = 'CONTAIN',
  COVER = 'COVER',
  FILL = 'FILL',
  INSIDE = 'INSIDE',
  OUTSIDE = 'OUTSIDE'
}

export enum ImageFormat {
  AUTO = 'AUTO',
  AVIF = 'AVIF',
  JPG = 'JPG',
  NO_CHANGE = 'NO_CHANGE',
  PNG = 'PNG',
  WEBP = 'WEBP'
}

export enum ImageLayout {
  CONSTRAINED = 'CONSTRAINED',
  FIXED = 'FIXED',
  FULL_WIDTH = 'FULL_WIDTH'
}

export enum ImagePlaceholder {
  BLURRED = 'BLURRED',
  DOMINANT_COLOR = 'DOMINANT_COLOR',
  NONE = 'NONE',
  TRACED_SVG = 'TRACED_SVG'
}

export type ImageSharp = Node & {
  __typename?: 'ImageSharp';
  children: Array<Node>;
  fixed?: Maybe<ImageSharpFixed>;
  fluid?: Maybe<ImageSharpFluid>;
  gatsbyImageData: Scalars['JSON'];
  id: Scalars['ID'];
  internal: Internal;
  original?: Maybe<ImageSharpOriginal>;
  parent?: Maybe<Node>;
  resize?: Maybe<ImageSharpResize>;
};


export type ImageSharpFixedArgs = {
  background?: InputMaybe<Scalars['String']>;
  base64Width?: InputMaybe<Scalars['Int']>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  duotone?: InputMaybe<DuotoneGradient>;
  fit?: InputMaybe<ImageFit>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<Scalars['Int']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  jpegQuality?: InputMaybe<Scalars['Int']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  pngQuality?: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
  rotate?: InputMaybe<Scalars['Int']>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  traceSVG?: InputMaybe<Potrace>;
  trim?: InputMaybe<Scalars['Float']>;
  webpQuality?: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};


export type ImageSharpFluidArgs = {
  background?: InputMaybe<Scalars['String']>;
  base64Width?: InputMaybe<Scalars['Int']>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  duotone?: InputMaybe<DuotoneGradient>;
  fit?: InputMaybe<ImageFit>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  jpegQuality?: InputMaybe<Scalars['Int']>;
  maxHeight?: InputMaybe<Scalars['Int']>;
  maxWidth?: InputMaybe<Scalars['Int']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  pngQuality?: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
  rotate?: InputMaybe<Scalars['Int']>;
  sizes?: InputMaybe<Scalars['String']>;
  srcSetBreakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  traceSVG?: InputMaybe<Potrace>;
  trim?: InputMaybe<Scalars['Float']>;
  webpQuality?: InputMaybe<Scalars['Int']>;
};


export type ImageSharpGatsbyImageDataArgs = {
  aspectRatio?: InputMaybe<Scalars['Float']>;
  avifOptions?: InputMaybe<AvifOptions>;
  backgroundColor?: InputMaybe<Scalars['String']>;
  blurredOptions?: InputMaybe<BlurredOptions>;
  breakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  formats?: InputMaybe<Array<InputMaybe<ImageFormat>>>;
  height?: InputMaybe<Scalars['Int']>;
  jpgOptions?: InputMaybe<JpgOptions>;
  layout?: InputMaybe<ImageLayout>;
  outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  placeholder?: InputMaybe<ImagePlaceholder>;
  pngOptions?: InputMaybe<PngOptions>;
  quality?: InputMaybe<Scalars['Int']>;
  sizes?: InputMaybe<Scalars['String']>;
  tracedSVGOptions?: InputMaybe<Potrace>;
  transformOptions?: InputMaybe<TransformOptions>;
  webpOptions?: InputMaybe<WebPOptions>;
  width?: InputMaybe<Scalars['Int']>;
};


export type ImageSharpResizeArgs = {
  background?: InputMaybe<Scalars['String']>;
  base64?: InputMaybe<Scalars['Boolean']>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  duotone?: InputMaybe<DuotoneGradient>;
  fit?: InputMaybe<ImageFit>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<Scalars['Int']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  jpegQuality?: InputMaybe<Scalars['Int']>;
  pngCompressionLevel?: InputMaybe<Scalars['Int']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  pngQuality?: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
  rotate?: InputMaybe<Scalars['Int']>;
  toFormat?: InputMaybe<ImageFormat>;
  traceSVG?: InputMaybe<Potrace>;
  trim?: InputMaybe<Scalars['Float']>;
  webpQuality?: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type ImageSharpConnection = {
  __typename?: 'ImageSharpConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<ImageSharpEdge>;
  group: Array<ImageSharpGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionGroupArgs = {
  field: ImageSharpFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ImageSharpConnectionMaxArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionMinArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionSumArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  __typename?: 'ImageSharpEdge';
  next?: Maybe<ImageSharp>;
  node: ImageSharp;
  previous?: Maybe<ImageSharp>;
};

export enum ImageSharpFieldsEnum {
  children = 'children',
  children___children = 'children___children',
  children___children___children = 'children___children___children',
  children___children___children___children = 'children___children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___id = 'children___children___id',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___children___parent___children = 'children___children___parent___children',
  children___children___parent___id = 'children___children___parent___id',
  children___id = 'children___id',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  children___parent___children = 'children___parent___children',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___id = 'children___parent___id',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___parent___id = 'children___parent___parent___id',
  fixed___aspectRatio = 'fixed___aspectRatio',
  fixed___base64 = 'fixed___base64',
  fixed___height = 'fixed___height',
  fixed___originalName = 'fixed___originalName',
  fixed___src = 'fixed___src',
  fixed___srcSet = 'fixed___srcSet',
  fixed___srcSetWebp = 'fixed___srcSetWebp',
  fixed___srcWebp = 'fixed___srcWebp',
  fixed___tracedSVG = 'fixed___tracedSVG',
  fixed___width = 'fixed___width',
  fluid___aspectRatio = 'fluid___aspectRatio',
  fluid___base64 = 'fluid___base64',
  fluid___originalImg = 'fluid___originalImg',
  fluid___originalName = 'fluid___originalName',
  fluid___presentationHeight = 'fluid___presentationHeight',
  fluid___presentationWidth = 'fluid___presentationWidth',
  fluid___sizes = 'fluid___sizes',
  fluid___src = 'fluid___src',
  fluid___srcSet = 'fluid___srcSet',
  fluid___srcSetWebp = 'fluid___srcSetWebp',
  fluid___srcWebp = 'fluid___srcWebp',
  fluid___tracedSVG = 'fluid___tracedSVG',
  gatsbyImageData = 'gatsbyImageData',
  id = 'id',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  original___height = 'original___height',
  original___src = 'original___src',
  original___width = 'original___width',
  parent___children = 'parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___id = 'parent___children___id',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___id = 'parent___id',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___parent___id = 'parent___parent___parent___id',
  resize___aspectRatio = 'resize___aspectRatio',
  resize___height = 'resize___height',
  resize___originalName = 'resize___originalName',
  resize___src = 'resize___src',
  resize___tracedSVG = 'resize___tracedSVG',
  resize___width = 'resize___width'
}

export type ImageSharpFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  fixed?: InputMaybe<ImageSharpFixedFilterInput>;
  fluid?: InputMaybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  original?: InputMaybe<ImageSharpOriginalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  resize?: InputMaybe<ImageSharpResizeFilterInput>;
};

export type ImageSharpFilterListInput = {
  elemMatch?: InputMaybe<ImageSharpFilterInput>;
};

export type ImageSharpFixed = {
  __typename?: 'ImageSharpFixed';
  aspectRatio?: Maybe<Scalars['Float']>;
  base64?: Maybe<Scalars['String']>;
  height: Scalars['Float'];
  originalName?: Maybe<Scalars['String']>;
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcSetWebp?: Maybe<Scalars['String']>;
  srcWebp?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width: Scalars['Float'];
};

export type ImageSharpFixedFilterInput = {
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  base64?: InputMaybe<StringQueryOperatorInput>;
  height?: InputMaybe<FloatQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  srcSet?: InputMaybe<StringQueryOperatorInput>;
  srcSetWebp?: InputMaybe<StringQueryOperatorInput>;
  srcWebp?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<FloatQueryOperatorInput>;
};

export type ImageSharpFluid = {
  __typename?: 'ImageSharpFluid';
  aspectRatio: Scalars['Float'];
  base64?: Maybe<Scalars['String']>;
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationHeight: Scalars['Int'];
  presentationWidth: Scalars['Int'];
  sizes: Scalars['String'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcSetWebp?: Maybe<Scalars['String']>;
  srcWebp?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
};

export type ImageSharpFluidFilterInput = {
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  base64?: InputMaybe<StringQueryOperatorInput>;
  originalImg?: InputMaybe<StringQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
  presentationHeight?: InputMaybe<IntQueryOperatorInput>;
  presentationWidth?: InputMaybe<IntQueryOperatorInput>;
  sizes?: InputMaybe<StringQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  srcSet?: InputMaybe<StringQueryOperatorInput>;
  srcSetWebp?: InputMaybe<StringQueryOperatorInput>;
  srcWebp?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
};

export type ImageSharpGroupConnection = {
  __typename?: 'ImageSharpGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<ImageSharpEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<ImageSharpGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ImageSharpGroupConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionGroupArgs = {
  field: ImageSharpFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ImageSharpGroupConnectionMaxArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionMinArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionSumArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpOriginal = {
  __typename?: 'ImageSharpOriginal';
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Float']>;
};

export type ImageSharpOriginalFilterInput = {
  height?: InputMaybe<FloatQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<FloatQueryOperatorInput>;
};

export type ImageSharpResize = {
  __typename?: 'ImageSharpResize';
  aspectRatio?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Int']>;
  originalName?: Maybe<Scalars['String']>;
  src?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};

export type ImageSharpResizeFilterInput = {
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
};

export type ImageSharpSortInput = {
  fields?: InputMaybe<Array<InputMaybe<ImageSharpFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type IntQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type Internal = {
  __typename?: 'Internal';
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type InternalFilterInput = {
  content?: InputMaybe<StringQueryOperatorInput>;
  contentDigest?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  fieldOwners?: InputMaybe<StringQueryOperatorInput>;
  ignoreType?: InputMaybe<BooleanQueryOperatorInput>;
  mediaType?: InputMaybe<StringQueryOperatorInput>;
  owner?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type JpgOptions = {
  progressive?: InputMaybe<Scalars['Boolean']>;
  quality?: InputMaybe<Scalars['Int']>;
};

export type JsonQueryOperatorInput = {
  eq?: InputMaybe<Scalars['JSON']>;
  glob?: InputMaybe<Scalars['JSON']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  ne?: InputMaybe<Scalars['JSON']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  regex?: InputMaybe<Scalars['JSON']>;
};

/** Node Interface */
export type Node = {
  children: Array<Node>;
  id: Scalars['ID'];
  internal: Internal;
  parent?: Maybe<Node>;
};

export type NodeFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: InputMaybe<NodeFilterInput>;
};

export type PngOptions = {
  compressionSpeed?: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  currentPage: Scalars['Int'];
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type Potrace = {
  alphaMax?: InputMaybe<Scalars['Float']>;
  background?: InputMaybe<Scalars['String']>;
  blackOnWhite?: InputMaybe<Scalars['Boolean']>;
  color?: InputMaybe<Scalars['String']>;
  optCurve?: InputMaybe<Scalars['Boolean']>;
  optTolerance?: InputMaybe<Scalars['Float']>;
  threshold?: InputMaybe<Scalars['Int']>;
  turdSize?: InputMaybe<Scalars['Float']>;
  turnPolicy?: InputMaybe<PotraceTurnPolicy>;
};

export enum PotraceTurnPolicy {
  TURNPOLICY_BLACK = 'TURNPOLICY_BLACK',
  TURNPOLICY_LEFT = 'TURNPOLICY_LEFT',
  TURNPOLICY_MAJORITY = 'TURNPOLICY_MAJORITY',
  TURNPOLICY_MINORITY = 'TURNPOLICY_MINORITY',
  TURNPOLICY_RIGHT = 'TURNPOLICY_RIGHT',
  TURNPOLICY_WHITE = 'TURNPOLICY_WHITE'
}

export type Query = {
  __typename?: 'Query';
  allDirectory: DirectoryConnection;
  allFile: FileConnection;
  allImageSharp: ImageSharpConnection;
  allSanityAuthor: SanityAuthorConnection;
  allSanityCategory: SanityCategoryConnection;
  allSanityFileAsset: SanityFileAssetConnection;
  allSanityImageAsset: SanityImageAssetConnection;
  allSanityPost: SanityPostConnection;
  allSanitySiteSettings: SanitySiteSettingsConnection;
  allSite: SiteConnection;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  allSiteFunction: SiteFunctionConnection;
  allSitePage: SitePageConnection;
  allSitePlugin: SitePluginConnection;
  directory?: Maybe<Directory>;
  file?: Maybe<File>;
  imageSharp?: Maybe<ImageSharp>;
  sanityAuthor?: Maybe<SanityAuthor>;
  sanityCategory?: Maybe<SanityCategory>;
  sanityFileAsset?: Maybe<SanityFileAsset>;
  sanityImageAsset?: Maybe<SanityImageAsset>;
  sanityPost?: Maybe<SanityPost>;
  sanitySiteSettings?: Maybe<SanitySiteSettings>;
  site?: Maybe<Site>;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  siteFunction?: Maybe<SiteFunction>;
  sitePage?: Maybe<SitePage>;
  sitePlugin?: Maybe<SitePlugin>;
};


export type QueryAllDirectoryArgs = {
  filter?: InputMaybe<DirectoryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<DirectorySortInput>;
};


export type QueryAllFileArgs = {
  filter?: InputMaybe<FileFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<FileSortInput>;
};


export type QueryAllImageSharpArgs = {
  filter?: InputMaybe<ImageSharpFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<ImageSharpSortInput>;
};


export type QueryAllSanityAuthorArgs = {
  filter?: InputMaybe<SanityAuthorFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SanityAuthorSortInput>;
};


export type QueryAllSanityCategoryArgs = {
  filter?: InputMaybe<SanityCategoryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SanityCategorySortInput>;
};


export type QueryAllSanityFileAssetArgs = {
  filter?: InputMaybe<SanityFileAssetFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SanityFileAssetSortInput>;
};


export type QueryAllSanityImageAssetArgs = {
  filter?: InputMaybe<SanityImageAssetFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SanityImageAssetSortInput>;
};


export type QueryAllSanityPostArgs = {
  filter?: InputMaybe<SanityPostFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SanityPostSortInput>;
};


export type QueryAllSanitySiteSettingsArgs = {
  filter?: InputMaybe<SanitySiteSettingsFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SanitySiteSettingsSortInput>;
};


export type QueryAllSiteArgs = {
  filter?: InputMaybe<SiteFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SiteSortInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter?: InputMaybe<SiteBuildMetadataFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SiteBuildMetadataSortInput>;
};


export type QueryAllSiteFunctionArgs = {
  filter?: InputMaybe<SiteFunctionFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SiteFunctionSortInput>;
};


export type QueryAllSitePageArgs = {
  filter?: InputMaybe<SitePageFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SitePageSortInput>;
};


export type QueryAllSitePluginArgs = {
  filter?: InputMaybe<SitePluginFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SitePluginSortInput>;
};


export type QueryDirectoryArgs = {
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
};


export type QueryFileArgs = {
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  childImageSharp?: InputMaybe<ImageSharpFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  childrenImageSharp?: InputMaybe<ImageSharpFilterListInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
};


export type QueryImageSharpArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  fixed?: InputMaybe<ImageSharpFixedFilterInput>;
  fluid?: InputMaybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  original?: InputMaybe<ImageSharpOriginalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  resize?: InputMaybe<ImageSharpResizeFilterInput>;
};


export type QuerySanityAuthorArgs = {
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _id?: InputMaybe<StringQueryOperatorInput>;
  _key?: InputMaybe<StringQueryOperatorInput>;
  _rawBio?: InputMaybe<JsonQueryOperatorInput>;
  _rawImage?: InputMaybe<JsonQueryOperatorInput>;
  _rawSlug?: InputMaybe<JsonQueryOperatorInput>;
  _rev?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  bio?: InputMaybe<SanityBlockFilterListInput>;
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  image?: InputMaybe<SanityImageFilterInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  slug?: InputMaybe<SanitySlugFilterInput>;
};


export type QuerySanityCategoryArgs = {
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _id?: InputMaybe<StringQueryOperatorInput>;
  _key?: InputMaybe<StringQueryOperatorInput>;
  _rev?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
};


export type QuerySanityFileAssetArgs = {
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _id?: InputMaybe<StringQueryOperatorInput>;
  _key?: InputMaybe<StringQueryOperatorInput>;
  _rawSource?: InputMaybe<JsonQueryOperatorInput>;
  _rev?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  altText?: InputMaybe<StringQueryOperatorInput>;
  assetId?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  label?: InputMaybe<StringQueryOperatorInput>;
  mimeType?: InputMaybe<StringQueryOperatorInput>;
  originalFilename?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  path?: InputMaybe<StringQueryOperatorInput>;
  sha1hash?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<FloatQueryOperatorInput>;
  source?: InputMaybe<SanityAssetSourceDataFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
};


export type QuerySanityImageAssetArgs = {
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _id?: InputMaybe<StringQueryOperatorInput>;
  _key?: InputMaybe<StringQueryOperatorInput>;
  _rawMetadata?: InputMaybe<JsonQueryOperatorInput>;
  _rawSource?: InputMaybe<JsonQueryOperatorInput>;
  _rev?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  altText?: InputMaybe<StringQueryOperatorInput>;
  assetId?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  gatsbyImageData?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  label?: InputMaybe<StringQueryOperatorInput>;
  metadata?: InputMaybe<SanityImageMetadataFilterInput>;
  mimeType?: InputMaybe<StringQueryOperatorInput>;
  originalFilename?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  path?: InputMaybe<StringQueryOperatorInput>;
  sha1hash?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<FloatQueryOperatorInput>;
  source?: InputMaybe<SanityAssetSourceDataFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  uploadId?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
};


export type QuerySanityPostArgs = {
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _id?: InputMaybe<StringQueryOperatorInput>;
  _key?: InputMaybe<StringQueryOperatorInput>;
  _rawAuthor?: InputMaybe<JsonQueryOperatorInput>;
  _rawBody?: InputMaybe<JsonQueryOperatorInput>;
  _rawCategories?: InputMaybe<JsonQueryOperatorInput>;
  _rawMainImage?: InputMaybe<JsonQueryOperatorInput>;
  _rawSlug?: InputMaybe<JsonQueryOperatorInput>;
  _rev?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  author?: InputMaybe<SanityAuthorFilterInput>;
  body?: InputMaybe<SanityBlockFilterListInput>;
  categories?: InputMaybe<SanityCategoryFilterListInput>;
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  mainImage?: InputMaybe<SanityImageFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  publishedAt?: InputMaybe<DateQueryOperatorInput>;
  slug?: InputMaybe<SanitySlugFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
};


export type QuerySanitySiteSettingsArgs = {
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _id?: InputMaybe<StringQueryOperatorInput>;
  _key?: InputMaybe<StringQueryOperatorInput>;
  _rev?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  keywords?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
};


export type QuerySiteArgs = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  host?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  jsxRuntime?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pathPrefix?: InputMaybe<StringQueryOperatorInput>;
  polyfill?: InputMaybe<BooleanQueryOperatorInput>;
  port?: InputMaybe<IntQueryOperatorInput>;
  siteMetadata?: InputMaybe<SiteSiteMetadataFilterInput>;
  trailingSlash?: InputMaybe<StringQueryOperatorInput>;
};


export type QuerySiteBuildMetadataArgs = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
};


export type QuerySiteFunctionArgs = {
  absoluteCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  functionRoute?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pluginName?: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
};


export type QuerySitePageArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  component?: InputMaybe<StringQueryOperatorInput>;
  componentChunkName?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  internalComponentName?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  pageContext?: InputMaybe<JsonQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  path?: InputMaybe<StringQueryOperatorInput>;
  pluginCreator?: InputMaybe<SitePluginFilterInput>;
};


export type QuerySitePluginArgs = {
  browserAPIs?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs?: InputMaybe<StringQueryOperatorInput>;
  packageJson?: InputMaybe<JsonQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pluginFilepath?: InputMaybe<StringQueryOperatorInput>;
  pluginOptions?: InputMaybe<JsonQueryOperatorInput>;
  resolve?: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs?: InputMaybe<StringQueryOperatorInput>;
  version?: InputMaybe<StringQueryOperatorInput>;
};

export type SanityAssetSourceData = {
  __typename?: 'SanityAssetSourceData';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type SanityAssetSourceDataFilterInput = {
  _key?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
};

export type SanityAuthor = Node & SanityDocument & {
  __typename?: 'SanityAuthor';
  _createdAt?: Maybe<Scalars['Date']>;
  _id?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  _rawBio?: Maybe<Scalars['JSON']>;
  _rawImage?: Maybe<Scalars['JSON']>;
  _rawSlug?: Maybe<Scalars['JSON']>;
  _rev?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  bio?: Maybe<Array<Maybe<SanityBlock>>>;
  children: Array<Node>;
  id: Scalars['ID'];
  image?: Maybe<SanityImage>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  slug?: Maybe<SanitySlug>;
};


export type SanityAuthor_CreatedAtArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type SanityAuthor_RawBioArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityAuthor_RawImageArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityAuthor_RawSlugArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityAuthor_UpdatedAtArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type SanityAuthorConnection = {
  __typename?: 'SanityAuthorConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SanityAuthorEdge>;
  group: Array<SanityAuthorGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SanityAuthor>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SanityAuthorConnectionDistinctArgs = {
  field: SanityAuthorFieldsEnum;
};


export type SanityAuthorConnectionGroupArgs = {
  field: SanityAuthorFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SanityAuthorConnectionMaxArgs = {
  field: SanityAuthorFieldsEnum;
};


export type SanityAuthorConnectionMinArgs = {
  field: SanityAuthorFieldsEnum;
};


export type SanityAuthorConnectionSumArgs = {
  field: SanityAuthorFieldsEnum;
};

export type SanityAuthorEdge = {
  __typename?: 'SanityAuthorEdge';
  next?: Maybe<SanityAuthor>;
  node: SanityAuthor;
  previous?: Maybe<SanityAuthor>;
};

export enum SanityAuthorFieldsEnum {
  _createdAt = '_createdAt',
  _id = '_id',
  _key = '_key',
  _rawBio = '_rawBio',
  _rawImage = '_rawImage',
  _rawSlug = '_rawSlug',
  _rev = '_rev',
  _type = '_type',
  _updatedAt = '_updatedAt',
  bio = 'bio',
  bio____key = 'bio____key',
  bio____rawChildren = 'bio____rawChildren',
  bio____type = 'bio____type',
  bio___children = 'bio___children',
  bio___children____key = 'bio___children____key',
  bio___children____type = 'bio___children____type',
  bio___children___marks = 'bio___children___marks',
  bio___children___text = 'bio___children___text',
  bio___list = 'bio___list',
  bio___style = 'bio___style',
  children = 'children',
  children___children = 'children___children',
  children___children___children = 'children___children___children',
  children___children___children___children = 'children___children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___id = 'children___children___id',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___children___parent___children = 'children___children___parent___children',
  children___children___parent___id = 'children___children___parent___id',
  children___id = 'children___id',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  children___parent___children = 'children___parent___children',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___id = 'children___parent___id',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___parent___id = 'children___parent___parent___id',
  id = 'id',
  image____key = 'image____key',
  image____rawAsset = 'image____rawAsset',
  image____rawCrop = 'image____rawCrop',
  image____rawHotspot = 'image____rawHotspot',
  image____type = 'image____type',
  image___asset____createdAt = 'image___asset____createdAt',
  image___asset____id = 'image___asset____id',
  image___asset____key = 'image___asset____key',
  image___asset____rawMetadata = 'image___asset____rawMetadata',
  image___asset____rawSource = 'image___asset____rawSource',
  image___asset____rev = 'image___asset____rev',
  image___asset____type = 'image___asset____type',
  image___asset____updatedAt = 'image___asset____updatedAt',
  image___asset___altText = 'image___asset___altText',
  image___asset___assetId = 'image___asset___assetId',
  image___asset___children = 'image___asset___children',
  image___asset___children___children = 'image___asset___children___children',
  image___asset___children___id = 'image___asset___children___id',
  image___asset___description = 'image___asset___description',
  image___asset___extension = 'image___asset___extension',
  image___asset___gatsbyImageData = 'image___asset___gatsbyImageData',
  image___asset___id = 'image___asset___id',
  image___asset___internal___content = 'image___asset___internal___content',
  image___asset___internal___contentDigest = 'image___asset___internal___contentDigest',
  image___asset___internal___description = 'image___asset___internal___description',
  image___asset___internal___fieldOwners = 'image___asset___internal___fieldOwners',
  image___asset___internal___ignoreType = 'image___asset___internal___ignoreType',
  image___asset___internal___mediaType = 'image___asset___internal___mediaType',
  image___asset___internal___owner = 'image___asset___internal___owner',
  image___asset___internal___type = 'image___asset___internal___type',
  image___asset___label = 'image___asset___label',
  image___asset___metadata____key = 'image___asset___metadata____key',
  image___asset___metadata____rawDimensions = 'image___asset___metadata____rawDimensions',
  image___asset___metadata____rawLocation = 'image___asset___metadata____rawLocation',
  image___asset___metadata____rawPalette = 'image___asset___metadata____rawPalette',
  image___asset___metadata____type = 'image___asset___metadata____type',
  image___asset___metadata___blurHash = 'image___asset___metadata___blurHash',
  image___asset___metadata___hasAlpha = 'image___asset___metadata___hasAlpha',
  image___asset___metadata___isOpaque = 'image___asset___metadata___isOpaque',
  image___asset___metadata___lqip = 'image___asset___metadata___lqip',
  image___asset___mimeType = 'image___asset___mimeType',
  image___asset___originalFilename = 'image___asset___originalFilename',
  image___asset___parent___children = 'image___asset___parent___children',
  image___asset___parent___id = 'image___asset___parent___id',
  image___asset___path = 'image___asset___path',
  image___asset___sha1hash = 'image___asset___sha1hash',
  image___asset___size = 'image___asset___size',
  image___asset___source____key = 'image___asset___source____key',
  image___asset___source____type = 'image___asset___source____type',
  image___asset___source___id = 'image___asset___source___id',
  image___asset___source___name = 'image___asset___source___name',
  image___asset___source___url = 'image___asset___source___url',
  image___asset___title = 'image___asset___title',
  image___asset___uploadId = 'image___asset___uploadId',
  image___asset___url = 'image___asset___url',
  image___crop____key = 'image___crop____key',
  image___crop____type = 'image___crop____type',
  image___crop___bottom = 'image___crop___bottom',
  image___crop___left = 'image___crop___left',
  image___crop___right = 'image___crop___right',
  image___crop___top = 'image___crop___top',
  image___hotspot____key = 'image___hotspot____key',
  image___hotspot____type = 'image___hotspot____type',
  image___hotspot___height = 'image___hotspot___height',
  image___hotspot___width = 'image___hotspot___width',
  image___hotspot___x = 'image___hotspot___x',
  image___hotspot___y = 'image___hotspot___y',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  name = 'name',
  parent___children = 'parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___id = 'parent___children___id',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___id = 'parent___id',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___parent___id = 'parent___parent___parent___id',
  slug____key = 'slug____key',
  slug____type = 'slug____type',
  slug___current = 'slug___current'
}

export type SanityAuthorFilterInput = {
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _id?: InputMaybe<StringQueryOperatorInput>;
  _key?: InputMaybe<StringQueryOperatorInput>;
  _rawBio?: InputMaybe<JsonQueryOperatorInput>;
  _rawImage?: InputMaybe<JsonQueryOperatorInput>;
  _rawSlug?: InputMaybe<JsonQueryOperatorInput>;
  _rev?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  bio?: InputMaybe<SanityBlockFilterListInput>;
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  image?: InputMaybe<SanityImageFilterInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  slug?: InputMaybe<SanitySlugFilterInput>;
};

export type SanityAuthorGroupConnection = {
  __typename?: 'SanityAuthorGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SanityAuthorEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<SanityAuthorGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SanityAuthor>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SanityAuthorGroupConnectionDistinctArgs = {
  field: SanityAuthorFieldsEnum;
};


export type SanityAuthorGroupConnectionGroupArgs = {
  field: SanityAuthorFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SanityAuthorGroupConnectionMaxArgs = {
  field: SanityAuthorFieldsEnum;
};


export type SanityAuthorGroupConnectionMinArgs = {
  field: SanityAuthorFieldsEnum;
};


export type SanityAuthorGroupConnectionSumArgs = {
  field: SanityAuthorFieldsEnum;
};

export type SanityAuthorSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SanityAuthorFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SanityBlock = {
  __typename?: 'SanityBlock';
  _key?: Maybe<Scalars['String']>;
  _rawChildren?: Maybe<Scalars['JSON']>;
  _type?: Maybe<Scalars['String']>;
  children?: Maybe<Array<Maybe<SanitySpan>>>;
  list?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['String']>;
};


export type SanityBlock_RawChildrenArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityBlockFilterInput = {
  _key?: InputMaybe<StringQueryOperatorInput>;
  _rawChildren?: InputMaybe<JsonQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<SanitySpanFilterListInput>;
  list?: InputMaybe<StringQueryOperatorInput>;
  style?: InputMaybe<StringQueryOperatorInput>;
};

export type SanityBlockFilterListInput = {
  elemMatch?: InputMaybe<SanityBlockFilterInput>;
};

export type SanityBlockOrImage = SanityBlock | SanityImage;

export type SanityCategory = Node & SanityDocument & {
  __typename?: 'SanityCategory';
  _createdAt?: Maybe<Scalars['Date']>;
  _id?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  _rev?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  children: Array<Node>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  internal: Internal;
  parent?: Maybe<Node>;
  title?: Maybe<Scalars['String']>;
};


export type SanityCategory_CreatedAtArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type SanityCategory_UpdatedAtArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type SanityCategoryConnection = {
  __typename?: 'SanityCategoryConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SanityCategoryEdge>;
  group: Array<SanityCategoryGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SanityCategory>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SanityCategoryConnectionDistinctArgs = {
  field: SanityCategoryFieldsEnum;
};


export type SanityCategoryConnectionGroupArgs = {
  field: SanityCategoryFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SanityCategoryConnectionMaxArgs = {
  field: SanityCategoryFieldsEnum;
};


export type SanityCategoryConnectionMinArgs = {
  field: SanityCategoryFieldsEnum;
};


export type SanityCategoryConnectionSumArgs = {
  field: SanityCategoryFieldsEnum;
};

export type SanityCategoryEdge = {
  __typename?: 'SanityCategoryEdge';
  next?: Maybe<SanityCategory>;
  node: SanityCategory;
  previous?: Maybe<SanityCategory>;
};

export enum SanityCategoryFieldsEnum {
  _createdAt = '_createdAt',
  _id = '_id',
  _key = '_key',
  _rev = '_rev',
  _type = '_type',
  _updatedAt = '_updatedAt',
  children = 'children',
  children___children = 'children___children',
  children___children___children = 'children___children___children',
  children___children___children___children = 'children___children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___id = 'children___children___id',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___children___parent___children = 'children___children___parent___children',
  children___children___parent___id = 'children___children___parent___id',
  children___id = 'children___id',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  children___parent___children = 'children___parent___children',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___id = 'children___parent___id',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___parent___id = 'children___parent___parent___id',
  description = 'description',
  id = 'id',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  parent___children = 'parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___id = 'parent___children___id',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___id = 'parent___id',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___parent___id = 'parent___parent___parent___id',
  title = 'title'
}

export type SanityCategoryFilterInput = {
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _id?: InputMaybe<StringQueryOperatorInput>;
  _key?: InputMaybe<StringQueryOperatorInput>;
  _rev?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
};

export type SanityCategoryFilterListInput = {
  elemMatch?: InputMaybe<SanityCategoryFilterInput>;
};

export type SanityCategoryGroupConnection = {
  __typename?: 'SanityCategoryGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SanityCategoryEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<SanityCategoryGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SanityCategory>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SanityCategoryGroupConnectionDistinctArgs = {
  field: SanityCategoryFieldsEnum;
};


export type SanityCategoryGroupConnectionGroupArgs = {
  field: SanityCategoryFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SanityCategoryGroupConnectionMaxArgs = {
  field: SanityCategoryFieldsEnum;
};


export type SanityCategoryGroupConnectionMinArgs = {
  field: SanityCategoryFieldsEnum;
};


export type SanityCategoryGroupConnectionSumArgs = {
  field: SanityCategoryFieldsEnum;
};

export type SanityCategorySortInput = {
  fields?: InputMaybe<Array<InputMaybe<SanityCategoryFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

/** A Sanity document */
export type SanityDocument = {
  _createdAt?: Maybe<Scalars['Date']>;
  _id?: Maybe<Scalars['String']>;
  _rev?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _updatedAt?: Maybe<Scalars['Date']>;
};

export type SanityFile = {
  __typename?: 'SanityFile';
  _key?: Maybe<Scalars['String']>;
  _rawAsset?: Maybe<Scalars['JSON']>;
  _type?: Maybe<Scalars['String']>;
  asset?: Maybe<SanityFileAsset>;
};


export type SanityFile_RawAssetArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityFileAsset = Node & SanityDocument & {
  __typename?: 'SanityFileAsset';
  _createdAt?: Maybe<Scalars['Date']>;
  _id?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  _rawSource?: Maybe<Scalars['JSON']>;
  _rev?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  altText?: Maybe<Scalars['String']>;
  assetId?: Maybe<Scalars['String']>;
  children: Array<Node>;
  description?: Maybe<Scalars['String']>;
  extension?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  internal: Internal;
  label?: Maybe<Scalars['String']>;
  mimeType?: Maybe<Scalars['String']>;
  originalFilename?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  path?: Maybe<Scalars['String']>;
  sha1hash?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  source?: Maybe<SanityAssetSourceData>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};


export type SanityFileAsset_CreatedAtArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type SanityFileAsset_RawSourceArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityFileAsset_UpdatedAtArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type SanityFileAssetConnection = {
  __typename?: 'SanityFileAssetConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SanityFileAssetEdge>;
  group: Array<SanityFileAssetGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SanityFileAsset>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SanityFileAssetConnectionDistinctArgs = {
  field: SanityFileAssetFieldsEnum;
};


export type SanityFileAssetConnectionGroupArgs = {
  field: SanityFileAssetFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SanityFileAssetConnectionMaxArgs = {
  field: SanityFileAssetFieldsEnum;
};


export type SanityFileAssetConnectionMinArgs = {
  field: SanityFileAssetFieldsEnum;
};


export type SanityFileAssetConnectionSumArgs = {
  field: SanityFileAssetFieldsEnum;
};

export type SanityFileAssetEdge = {
  __typename?: 'SanityFileAssetEdge';
  next?: Maybe<SanityFileAsset>;
  node: SanityFileAsset;
  previous?: Maybe<SanityFileAsset>;
};

export enum SanityFileAssetFieldsEnum {
  _createdAt = '_createdAt',
  _id = '_id',
  _key = '_key',
  _rawSource = '_rawSource',
  _rev = '_rev',
  _type = '_type',
  _updatedAt = '_updatedAt',
  altText = 'altText',
  assetId = 'assetId',
  children = 'children',
  children___children = 'children___children',
  children___children___children = 'children___children___children',
  children___children___children___children = 'children___children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___id = 'children___children___id',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___children___parent___children = 'children___children___parent___children',
  children___children___parent___id = 'children___children___parent___id',
  children___id = 'children___id',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  children___parent___children = 'children___parent___children',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___id = 'children___parent___id',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___parent___id = 'children___parent___parent___id',
  description = 'description',
  extension = 'extension',
  id = 'id',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  label = 'label',
  mimeType = 'mimeType',
  originalFilename = 'originalFilename',
  parent___children = 'parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___id = 'parent___children___id',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___id = 'parent___id',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___parent___id = 'parent___parent___parent___id',
  path = 'path',
  sha1hash = 'sha1hash',
  size = 'size',
  source____key = 'source____key',
  source____type = 'source____type',
  source___id = 'source___id',
  source___name = 'source___name',
  source___url = 'source___url',
  title = 'title',
  url = 'url'
}

export type SanityFileAssetFilterInput = {
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _id?: InputMaybe<StringQueryOperatorInput>;
  _key?: InputMaybe<StringQueryOperatorInput>;
  _rawSource?: InputMaybe<JsonQueryOperatorInput>;
  _rev?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  altText?: InputMaybe<StringQueryOperatorInput>;
  assetId?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  label?: InputMaybe<StringQueryOperatorInput>;
  mimeType?: InputMaybe<StringQueryOperatorInput>;
  originalFilename?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  path?: InputMaybe<StringQueryOperatorInput>;
  sha1hash?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<FloatQueryOperatorInput>;
  source?: InputMaybe<SanityAssetSourceDataFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
};

export type SanityFileAssetGroupConnection = {
  __typename?: 'SanityFileAssetGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SanityFileAssetEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<SanityFileAssetGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SanityFileAsset>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SanityFileAssetGroupConnectionDistinctArgs = {
  field: SanityFileAssetFieldsEnum;
};


export type SanityFileAssetGroupConnectionGroupArgs = {
  field: SanityFileAssetFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SanityFileAssetGroupConnectionMaxArgs = {
  field: SanityFileAssetFieldsEnum;
};


export type SanityFileAssetGroupConnectionMinArgs = {
  field: SanityFileAssetFieldsEnum;
};


export type SanityFileAssetGroupConnectionSumArgs = {
  field: SanityFileAssetFieldsEnum;
};

export type SanityFileAssetSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SanityFileAssetFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export enum SanityGatsbyImagePlaceholder {
  BLURRED = 'BLURRED',
  DOMINANT_COLOR = 'DOMINANT_COLOR',
  NONE = 'NONE'
}

export type SanityGeopoint = {
  __typename?: 'SanityGeopoint';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  alt?: Maybe<Scalars['Float']>;
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
};

export type SanityGeopointFilterInput = {
  _key?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  alt?: InputMaybe<FloatQueryOperatorInput>;
  lat?: InputMaybe<FloatQueryOperatorInput>;
  lng?: InputMaybe<FloatQueryOperatorInput>;
};

export type SanityImage = {
  __typename?: 'SanityImage';
  _key?: Maybe<Scalars['String']>;
  _rawAsset?: Maybe<Scalars['JSON']>;
  _rawCrop?: Maybe<Scalars['JSON']>;
  _rawHotspot?: Maybe<Scalars['JSON']>;
  _type?: Maybe<Scalars['String']>;
  asset?: Maybe<SanityImageAsset>;
  crop?: Maybe<SanityImageCrop>;
  hotspot?: Maybe<SanityImageHotspot>;
};


export type SanityImage_RawAssetArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityImage_RawCropArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityImage_RawHotspotArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityImageAsset = Node & SanityDocument & {
  __typename?: 'SanityImageAsset';
  _createdAt?: Maybe<Scalars['Date']>;
  _id?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  _rawMetadata?: Maybe<Scalars['JSON']>;
  _rawSource?: Maybe<Scalars['JSON']>;
  _rev?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  altText?: Maybe<Scalars['String']>;
  assetId?: Maybe<Scalars['String']>;
  children: Array<Node>;
  description?: Maybe<Scalars['String']>;
  extension?: Maybe<Scalars['String']>;
  gatsbyImageData: Scalars['JSON'];
  id: Scalars['ID'];
  internal: Internal;
  label?: Maybe<Scalars['String']>;
  metadata?: Maybe<SanityImageMetadata>;
  mimeType?: Maybe<Scalars['String']>;
  originalFilename?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  path?: Maybe<Scalars['String']>;
  sha1hash?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  source?: Maybe<SanityAssetSourceData>;
  title?: Maybe<Scalars['String']>;
  uploadId?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};


export type SanityImageAsset_CreatedAtArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type SanityImageAsset_RawMetadataArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityImageAsset_RawSourceArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityImageAsset_UpdatedAtArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type SanityImageAssetGatsbyImageDataArgs = {
  aspectRatio?: InputMaybe<Scalars['Float']>;
  backgroundColor?: InputMaybe<Scalars['String']>;
  breakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  fit?: InputMaybe<SanityImageFit>;
  formats?: InputMaybe<Array<InputMaybe<GatsbyImageFormat>>>;
  height?: InputMaybe<Scalars['Int']>;
  layout?: InputMaybe<GatsbyImageLayout>;
  outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  placeholder?: InputMaybe<SanityGatsbyImagePlaceholder>;
  sizes?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type SanityImageAssetConnection = {
  __typename?: 'SanityImageAssetConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SanityImageAssetEdge>;
  group: Array<SanityImageAssetGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SanityImageAsset>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SanityImageAssetConnectionDistinctArgs = {
  field: SanityImageAssetFieldsEnum;
};


export type SanityImageAssetConnectionGroupArgs = {
  field: SanityImageAssetFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SanityImageAssetConnectionMaxArgs = {
  field: SanityImageAssetFieldsEnum;
};


export type SanityImageAssetConnectionMinArgs = {
  field: SanityImageAssetFieldsEnum;
};


export type SanityImageAssetConnectionSumArgs = {
  field: SanityImageAssetFieldsEnum;
};

export type SanityImageAssetEdge = {
  __typename?: 'SanityImageAssetEdge';
  next?: Maybe<SanityImageAsset>;
  node: SanityImageAsset;
  previous?: Maybe<SanityImageAsset>;
};

export enum SanityImageAssetFieldsEnum {
  _createdAt = '_createdAt',
  _id = '_id',
  _key = '_key',
  _rawMetadata = '_rawMetadata',
  _rawSource = '_rawSource',
  _rev = '_rev',
  _type = '_type',
  _updatedAt = '_updatedAt',
  altText = 'altText',
  assetId = 'assetId',
  children = 'children',
  children___children = 'children___children',
  children___children___children = 'children___children___children',
  children___children___children___children = 'children___children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___id = 'children___children___id',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___children___parent___children = 'children___children___parent___children',
  children___children___parent___id = 'children___children___parent___id',
  children___id = 'children___id',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  children___parent___children = 'children___parent___children',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___id = 'children___parent___id',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___parent___id = 'children___parent___parent___id',
  description = 'description',
  extension = 'extension',
  gatsbyImageData = 'gatsbyImageData',
  id = 'id',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  label = 'label',
  metadata____key = 'metadata____key',
  metadata____rawDimensions = 'metadata____rawDimensions',
  metadata____rawLocation = 'metadata____rawLocation',
  metadata____rawPalette = 'metadata____rawPalette',
  metadata____type = 'metadata____type',
  metadata___blurHash = 'metadata___blurHash',
  metadata___dimensions____key = 'metadata___dimensions____key',
  metadata___dimensions____type = 'metadata___dimensions____type',
  metadata___dimensions___aspectRatio = 'metadata___dimensions___aspectRatio',
  metadata___dimensions___height = 'metadata___dimensions___height',
  metadata___dimensions___width = 'metadata___dimensions___width',
  metadata___hasAlpha = 'metadata___hasAlpha',
  metadata___isOpaque = 'metadata___isOpaque',
  metadata___location____key = 'metadata___location____key',
  metadata___location____type = 'metadata___location____type',
  metadata___location___alt = 'metadata___location___alt',
  metadata___location___lat = 'metadata___location___lat',
  metadata___location___lng = 'metadata___location___lng',
  metadata___lqip = 'metadata___lqip',
  metadata___palette____key = 'metadata___palette____key',
  metadata___palette____rawDarkMuted = 'metadata___palette____rawDarkMuted',
  metadata___palette____rawDarkVibrant = 'metadata___palette____rawDarkVibrant',
  metadata___palette____rawDominant = 'metadata___palette____rawDominant',
  metadata___palette____rawLightMuted = 'metadata___palette____rawLightMuted',
  metadata___palette____rawLightVibrant = 'metadata___palette____rawLightVibrant',
  metadata___palette____rawMuted = 'metadata___palette____rawMuted',
  metadata___palette____rawVibrant = 'metadata___palette____rawVibrant',
  metadata___palette____type = 'metadata___palette____type',
  metadata___palette___darkMuted____key = 'metadata___palette___darkMuted____key',
  metadata___palette___darkMuted____type = 'metadata___palette___darkMuted____type',
  metadata___palette___darkMuted___background = 'metadata___palette___darkMuted___background',
  metadata___palette___darkMuted___foreground = 'metadata___palette___darkMuted___foreground',
  metadata___palette___darkMuted___population = 'metadata___palette___darkMuted___population',
  metadata___palette___darkMuted___title = 'metadata___palette___darkMuted___title',
  metadata___palette___darkVibrant____key = 'metadata___palette___darkVibrant____key',
  metadata___palette___darkVibrant____type = 'metadata___palette___darkVibrant____type',
  metadata___palette___darkVibrant___background = 'metadata___palette___darkVibrant___background',
  metadata___palette___darkVibrant___foreground = 'metadata___palette___darkVibrant___foreground',
  metadata___palette___darkVibrant___population = 'metadata___palette___darkVibrant___population',
  metadata___palette___darkVibrant___title = 'metadata___palette___darkVibrant___title',
  metadata___palette___dominant____key = 'metadata___palette___dominant____key',
  metadata___palette___dominant____type = 'metadata___palette___dominant____type',
  metadata___palette___dominant___background = 'metadata___palette___dominant___background',
  metadata___palette___dominant___foreground = 'metadata___palette___dominant___foreground',
  metadata___palette___dominant___population = 'metadata___palette___dominant___population',
  metadata___palette___dominant___title = 'metadata___palette___dominant___title',
  metadata___palette___lightMuted____key = 'metadata___palette___lightMuted____key',
  metadata___palette___lightMuted____type = 'metadata___palette___lightMuted____type',
  metadata___palette___lightMuted___background = 'metadata___palette___lightMuted___background',
  metadata___palette___lightMuted___foreground = 'metadata___palette___lightMuted___foreground',
  metadata___palette___lightMuted___population = 'metadata___palette___lightMuted___population',
  metadata___palette___lightMuted___title = 'metadata___palette___lightMuted___title',
  metadata___palette___lightVibrant____key = 'metadata___palette___lightVibrant____key',
  metadata___palette___lightVibrant____type = 'metadata___palette___lightVibrant____type',
  metadata___palette___lightVibrant___background = 'metadata___palette___lightVibrant___background',
  metadata___palette___lightVibrant___foreground = 'metadata___palette___lightVibrant___foreground',
  metadata___palette___lightVibrant___population = 'metadata___palette___lightVibrant___population',
  metadata___palette___lightVibrant___title = 'metadata___palette___lightVibrant___title',
  metadata___palette___muted____key = 'metadata___palette___muted____key',
  metadata___palette___muted____type = 'metadata___palette___muted____type',
  metadata___palette___muted___background = 'metadata___palette___muted___background',
  metadata___palette___muted___foreground = 'metadata___palette___muted___foreground',
  metadata___palette___muted___population = 'metadata___palette___muted___population',
  metadata___palette___muted___title = 'metadata___palette___muted___title',
  metadata___palette___vibrant____key = 'metadata___palette___vibrant____key',
  metadata___palette___vibrant____type = 'metadata___palette___vibrant____type',
  metadata___palette___vibrant___background = 'metadata___palette___vibrant___background',
  metadata___palette___vibrant___foreground = 'metadata___palette___vibrant___foreground',
  metadata___palette___vibrant___population = 'metadata___palette___vibrant___population',
  metadata___palette___vibrant___title = 'metadata___palette___vibrant___title',
  mimeType = 'mimeType',
  originalFilename = 'originalFilename',
  parent___children = 'parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___id = 'parent___children___id',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___id = 'parent___id',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___parent___id = 'parent___parent___parent___id',
  path = 'path',
  sha1hash = 'sha1hash',
  size = 'size',
  source____key = 'source____key',
  source____type = 'source____type',
  source___id = 'source___id',
  source___name = 'source___name',
  source___url = 'source___url',
  title = 'title',
  uploadId = 'uploadId',
  url = 'url'
}

export type SanityImageAssetFilterInput = {
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _id?: InputMaybe<StringQueryOperatorInput>;
  _key?: InputMaybe<StringQueryOperatorInput>;
  _rawMetadata?: InputMaybe<JsonQueryOperatorInput>;
  _rawSource?: InputMaybe<JsonQueryOperatorInput>;
  _rev?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  altText?: InputMaybe<StringQueryOperatorInput>;
  assetId?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  gatsbyImageData?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  label?: InputMaybe<StringQueryOperatorInput>;
  metadata?: InputMaybe<SanityImageMetadataFilterInput>;
  mimeType?: InputMaybe<StringQueryOperatorInput>;
  originalFilename?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  path?: InputMaybe<StringQueryOperatorInput>;
  sha1hash?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<FloatQueryOperatorInput>;
  source?: InputMaybe<SanityAssetSourceDataFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  uploadId?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
};

export type SanityImageAssetGroupConnection = {
  __typename?: 'SanityImageAssetGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SanityImageAssetEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<SanityImageAssetGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SanityImageAsset>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SanityImageAssetGroupConnectionDistinctArgs = {
  field: SanityImageAssetFieldsEnum;
};


export type SanityImageAssetGroupConnectionGroupArgs = {
  field: SanityImageAssetFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SanityImageAssetGroupConnectionMaxArgs = {
  field: SanityImageAssetFieldsEnum;
};


export type SanityImageAssetGroupConnectionMinArgs = {
  field: SanityImageAssetFieldsEnum;
};


export type SanityImageAssetGroupConnectionSumArgs = {
  field: SanityImageAssetFieldsEnum;
};

export type SanityImageAssetSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SanityImageAssetFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SanityImageCrop = {
  __typename?: 'SanityImageCrop';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  bottom?: Maybe<Scalars['Float']>;
  left?: Maybe<Scalars['Float']>;
  right?: Maybe<Scalars['Float']>;
  top?: Maybe<Scalars['Float']>;
};

export type SanityImageCropFilterInput = {
  _key?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  bottom?: InputMaybe<FloatQueryOperatorInput>;
  left?: InputMaybe<FloatQueryOperatorInput>;
  right?: InputMaybe<FloatQueryOperatorInput>;
  top?: InputMaybe<FloatQueryOperatorInput>;
};

export type SanityImageDimensions = {
  __typename?: 'SanityImageDimensions';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type SanityImageDimensionsFilterInput = {
  _key?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  height?: InputMaybe<FloatQueryOperatorInput>;
  width?: InputMaybe<FloatQueryOperatorInput>;
};

export type SanityImageFilterInput = {
  _key?: InputMaybe<StringQueryOperatorInput>;
  _rawAsset?: InputMaybe<JsonQueryOperatorInput>;
  _rawCrop?: InputMaybe<JsonQueryOperatorInput>;
  _rawHotspot?: InputMaybe<JsonQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  asset?: InputMaybe<SanityImageAssetFilterInput>;
  crop?: InputMaybe<SanityImageCropFilterInput>;
  hotspot?: InputMaybe<SanityImageHotspotFilterInput>;
};

export enum SanityImageFit {
  CLIP = 'CLIP',
  CROP = 'CROP',
  FILL = 'FILL',
  FILLMAX = 'FILLMAX',
  MAX = 'MAX',
  MIN = 'MIN',
  SCALE = 'SCALE'
}

export type SanityImageHotspot = {
  __typename?: 'SanityImageHotspot';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  x?: Maybe<Scalars['Float']>;
  y?: Maybe<Scalars['Float']>;
};

export type SanityImageHotspotFilterInput = {
  _key?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  height?: InputMaybe<FloatQueryOperatorInput>;
  width?: InputMaybe<FloatQueryOperatorInput>;
  x?: InputMaybe<FloatQueryOperatorInput>;
  y?: InputMaybe<FloatQueryOperatorInput>;
};

export type SanityImageMetadata = {
  __typename?: 'SanityImageMetadata';
  _key?: Maybe<Scalars['String']>;
  _rawDimensions?: Maybe<Scalars['JSON']>;
  _rawLocation?: Maybe<Scalars['JSON']>;
  _rawPalette?: Maybe<Scalars['JSON']>;
  _type?: Maybe<Scalars['String']>;
  blurHash?: Maybe<Scalars['String']>;
  dimensions?: Maybe<SanityImageDimensions>;
  hasAlpha?: Maybe<Scalars['Boolean']>;
  isOpaque?: Maybe<Scalars['Boolean']>;
  location?: Maybe<SanityGeopoint>;
  lqip?: Maybe<Scalars['String']>;
  palette?: Maybe<SanityImagePalette>;
};


export type SanityImageMetadata_RawDimensionsArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityImageMetadata_RawLocationArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityImageMetadata_RawPaletteArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityImageMetadataFilterInput = {
  _key?: InputMaybe<StringQueryOperatorInput>;
  _rawDimensions?: InputMaybe<JsonQueryOperatorInput>;
  _rawLocation?: InputMaybe<JsonQueryOperatorInput>;
  _rawPalette?: InputMaybe<JsonQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  blurHash?: InputMaybe<StringQueryOperatorInput>;
  dimensions?: InputMaybe<SanityImageDimensionsFilterInput>;
  hasAlpha?: InputMaybe<BooleanQueryOperatorInput>;
  isOpaque?: InputMaybe<BooleanQueryOperatorInput>;
  location?: InputMaybe<SanityGeopointFilterInput>;
  lqip?: InputMaybe<StringQueryOperatorInput>;
  palette?: InputMaybe<SanityImagePaletteFilterInput>;
};

export type SanityImagePalette = {
  __typename?: 'SanityImagePalette';
  _key?: Maybe<Scalars['String']>;
  _rawDarkMuted?: Maybe<Scalars['JSON']>;
  _rawDarkVibrant?: Maybe<Scalars['JSON']>;
  _rawDominant?: Maybe<Scalars['JSON']>;
  _rawLightMuted?: Maybe<Scalars['JSON']>;
  _rawLightVibrant?: Maybe<Scalars['JSON']>;
  _rawMuted?: Maybe<Scalars['JSON']>;
  _rawVibrant?: Maybe<Scalars['JSON']>;
  _type?: Maybe<Scalars['String']>;
  darkMuted?: Maybe<SanityImagePaletteSwatch>;
  darkVibrant?: Maybe<SanityImagePaletteSwatch>;
  dominant?: Maybe<SanityImagePaletteSwatch>;
  lightMuted?: Maybe<SanityImagePaletteSwatch>;
  lightVibrant?: Maybe<SanityImagePaletteSwatch>;
  muted?: Maybe<SanityImagePaletteSwatch>;
  vibrant?: Maybe<SanityImagePaletteSwatch>;
};


export type SanityImagePalette_RawDarkMutedArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityImagePalette_RawDarkVibrantArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityImagePalette_RawDominantArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityImagePalette_RawLightMutedArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityImagePalette_RawLightVibrantArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityImagePalette_RawMutedArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityImagePalette_RawVibrantArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityImagePaletteFilterInput = {
  _key?: InputMaybe<StringQueryOperatorInput>;
  _rawDarkMuted?: InputMaybe<JsonQueryOperatorInput>;
  _rawDarkVibrant?: InputMaybe<JsonQueryOperatorInput>;
  _rawDominant?: InputMaybe<JsonQueryOperatorInput>;
  _rawLightMuted?: InputMaybe<JsonQueryOperatorInput>;
  _rawLightVibrant?: InputMaybe<JsonQueryOperatorInput>;
  _rawMuted?: InputMaybe<JsonQueryOperatorInput>;
  _rawVibrant?: InputMaybe<JsonQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  darkMuted?: InputMaybe<SanityImagePaletteSwatchFilterInput>;
  darkVibrant?: InputMaybe<SanityImagePaletteSwatchFilterInput>;
  dominant?: InputMaybe<SanityImagePaletteSwatchFilterInput>;
  lightMuted?: InputMaybe<SanityImagePaletteSwatchFilterInput>;
  lightVibrant?: InputMaybe<SanityImagePaletteSwatchFilterInput>;
  muted?: InputMaybe<SanityImagePaletteSwatchFilterInput>;
  vibrant?: InputMaybe<SanityImagePaletteSwatchFilterInput>;
};

export type SanityImagePaletteSwatch = {
  __typename?: 'SanityImagePaletteSwatch';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['String']>;
  foreground?: Maybe<Scalars['String']>;
  population?: Maybe<Scalars['Float']>;
  title?: Maybe<Scalars['String']>;
};

export type SanityImagePaletteSwatchFilterInput = {
  _key?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  background?: InputMaybe<StringQueryOperatorInput>;
  foreground?: InputMaybe<StringQueryOperatorInput>;
  population?: InputMaybe<FloatQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
};

export type SanityPost = Node & SanityDocument & {
  __typename?: 'SanityPost';
  _createdAt?: Maybe<Scalars['Date']>;
  _id?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  _rawAuthor?: Maybe<Scalars['JSON']>;
  _rawBody?: Maybe<Scalars['JSON']>;
  _rawCategories?: Maybe<Scalars['JSON']>;
  _rawMainImage?: Maybe<Scalars['JSON']>;
  _rawSlug?: Maybe<Scalars['JSON']>;
  _rev?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  author?: Maybe<SanityAuthor>;
  body?: Maybe<Array<Maybe<SanityBlock>>>;
  categories?: Maybe<Array<Maybe<SanityCategory>>>;
  children: Array<Node>;
  id: Scalars['ID'];
  internal: Internal;
  mainImage?: Maybe<SanityImage>;
  parent?: Maybe<Node>;
  publishedAt?: Maybe<Scalars['Date']>;
  slug?: Maybe<SanitySlug>;
  title?: Maybe<Scalars['String']>;
};


export type SanityPost_CreatedAtArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type SanityPost_RawAuthorArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityPost_RawBodyArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityPost_RawCategoriesArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityPost_RawMainImageArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityPost_RawSlugArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityPost_UpdatedAtArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type SanityPostPublishedAtArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type SanityPostConnection = {
  __typename?: 'SanityPostConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SanityPostEdge>;
  group: Array<SanityPostGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SanityPost>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SanityPostConnectionDistinctArgs = {
  field: SanityPostFieldsEnum;
};


export type SanityPostConnectionGroupArgs = {
  field: SanityPostFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SanityPostConnectionMaxArgs = {
  field: SanityPostFieldsEnum;
};


export type SanityPostConnectionMinArgs = {
  field: SanityPostFieldsEnum;
};


export type SanityPostConnectionSumArgs = {
  field: SanityPostFieldsEnum;
};

export type SanityPostEdge = {
  __typename?: 'SanityPostEdge';
  next?: Maybe<SanityPost>;
  node: SanityPost;
  previous?: Maybe<SanityPost>;
};

export enum SanityPostFieldsEnum {
  _createdAt = '_createdAt',
  _id = '_id',
  _key = '_key',
  _rawAuthor = '_rawAuthor',
  _rawBody = '_rawBody',
  _rawCategories = '_rawCategories',
  _rawMainImage = '_rawMainImage',
  _rawSlug = '_rawSlug',
  _rev = '_rev',
  _type = '_type',
  _updatedAt = '_updatedAt',
  author____createdAt = 'author____createdAt',
  author____id = 'author____id',
  author____key = 'author____key',
  author____rawBio = 'author____rawBio',
  author____rawImage = 'author____rawImage',
  author____rawSlug = 'author____rawSlug',
  author____rev = 'author____rev',
  author____type = 'author____type',
  author____updatedAt = 'author____updatedAt',
  author___bio = 'author___bio',
  author___bio____key = 'author___bio____key',
  author___bio____rawChildren = 'author___bio____rawChildren',
  author___bio____type = 'author___bio____type',
  author___bio___children = 'author___bio___children',
  author___bio___children____key = 'author___bio___children____key',
  author___bio___children____type = 'author___bio___children____type',
  author___bio___children___marks = 'author___bio___children___marks',
  author___bio___children___text = 'author___bio___children___text',
  author___bio___list = 'author___bio___list',
  author___bio___style = 'author___bio___style',
  author___children = 'author___children',
  author___children___children = 'author___children___children',
  author___children___children___children = 'author___children___children___children',
  author___children___children___id = 'author___children___children___id',
  author___children___id = 'author___children___id',
  author___children___internal___content = 'author___children___internal___content',
  author___children___internal___contentDigest = 'author___children___internal___contentDigest',
  author___children___internal___description = 'author___children___internal___description',
  author___children___internal___fieldOwners = 'author___children___internal___fieldOwners',
  author___children___internal___ignoreType = 'author___children___internal___ignoreType',
  author___children___internal___mediaType = 'author___children___internal___mediaType',
  author___children___internal___owner = 'author___children___internal___owner',
  author___children___internal___type = 'author___children___internal___type',
  author___children___parent___children = 'author___children___parent___children',
  author___children___parent___id = 'author___children___parent___id',
  author___id = 'author___id',
  author___image____key = 'author___image____key',
  author___image____rawAsset = 'author___image____rawAsset',
  author___image____rawCrop = 'author___image____rawCrop',
  author___image____rawHotspot = 'author___image____rawHotspot',
  author___image____type = 'author___image____type',
  author___image___asset____createdAt = 'author___image___asset____createdAt',
  author___image___asset____id = 'author___image___asset____id',
  author___image___asset____key = 'author___image___asset____key',
  author___image___asset____rawMetadata = 'author___image___asset____rawMetadata',
  author___image___asset____rawSource = 'author___image___asset____rawSource',
  author___image___asset____rev = 'author___image___asset____rev',
  author___image___asset____type = 'author___image___asset____type',
  author___image___asset____updatedAt = 'author___image___asset____updatedAt',
  author___image___asset___altText = 'author___image___asset___altText',
  author___image___asset___assetId = 'author___image___asset___assetId',
  author___image___asset___children = 'author___image___asset___children',
  author___image___asset___description = 'author___image___asset___description',
  author___image___asset___extension = 'author___image___asset___extension',
  author___image___asset___gatsbyImageData = 'author___image___asset___gatsbyImageData',
  author___image___asset___id = 'author___image___asset___id',
  author___image___asset___label = 'author___image___asset___label',
  author___image___asset___mimeType = 'author___image___asset___mimeType',
  author___image___asset___originalFilename = 'author___image___asset___originalFilename',
  author___image___asset___path = 'author___image___asset___path',
  author___image___asset___sha1hash = 'author___image___asset___sha1hash',
  author___image___asset___size = 'author___image___asset___size',
  author___image___asset___title = 'author___image___asset___title',
  author___image___asset___uploadId = 'author___image___asset___uploadId',
  author___image___asset___url = 'author___image___asset___url',
  author___image___crop____key = 'author___image___crop____key',
  author___image___crop____type = 'author___image___crop____type',
  author___image___crop___bottom = 'author___image___crop___bottom',
  author___image___crop___left = 'author___image___crop___left',
  author___image___crop___right = 'author___image___crop___right',
  author___image___crop___top = 'author___image___crop___top',
  author___image___hotspot____key = 'author___image___hotspot____key',
  author___image___hotspot____type = 'author___image___hotspot____type',
  author___image___hotspot___height = 'author___image___hotspot___height',
  author___image___hotspot___width = 'author___image___hotspot___width',
  author___image___hotspot___x = 'author___image___hotspot___x',
  author___image___hotspot___y = 'author___image___hotspot___y',
  author___internal___content = 'author___internal___content',
  author___internal___contentDigest = 'author___internal___contentDigest',
  author___internal___description = 'author___internal___description',
  author___internal___fieldOwners = 'author___internal___fieldOwners',
  author___internal___ignoreType = 'author___internal___ignoreType',
  author___internal___mediaType = 'author___internal___mediaType',
  author___internal___owner = 'author___internal___owner',
  author___internal___type = 'author___internal___type',
  author___name = 'author___name',
  author___parent___children = 'author___parent___children',
  author___parent___children___children = 'author___parent___children___children',
  author___parent___children___id = 'author___parent___children___id',
  author___parent___id = 'author___parent___id',
  author___parent___internal___content = 'author___parent___internal___content',
  author___parent___internal___contentDigest = 'author___parent___internal___contentDigest',
  author___parent___internal___description = 'author___parent___internal___description',
  author___parent___internal___fieldOwners = 'author___parent___internal___fieldOwners',
  author___parent___internal___ignoreType = 'author___parent___internal___ignoreType',
  author___parent___internal___mediaType = 'author___parent___internal___mediaType',
  author___parent___internal___owner = 'author___parent___internal___owner',
  author___parent___internal___type = 'author___parent___internal___type',
  author___parent___parent___children = 'author___parent___parent___children',
  author___parent___parent___id = 'author___parent___parent___id',
  author___slug____key = 'author___slug____key',
  author___slug____type = 'author___slug____type',
  author___slug___current = 'author___slug___current',
  body = 'body',
  body____key = 'body____key',
  body____rawChildren = 'body____rawChildren',
  body____type = 'body____type',
  body___children = 'body___children',
  body___children____key = 'body___children____key',
  body___children____type = 'body___children____type',
  body___children___marks = 'body___children___marks',
  body___children___text = 'body___children___text',
  body___list = 'body___list',
  body___style = 'body___style',
  categories = 'categories',
  categories____createdAt = 'categories____createdAt',
  categories____id = 'categories____id',
  categories____key = 'categories____key',
  categories____rev = 'categories____rev',
  categories____type = 'categories____type',
  categories____updatedAt = 'categories____updatedAt',
  categories___children = 'categories___children',
  categories___children___children = 'categories___children___children',
  categories___children___children___children = 'categories___children___children___children',
  categories___children___children___id = 'categories___children___children___id',
  categories___children___id = 'categories___children___id',
  categories___children___internal___content = 'categories___children___internal___content',
  categories___children___internal___contentDigest = 'categories___children___internal___contentDigest',
  categories___children___internal___description = 'categories___children___internal___description',
  categories___children___internal___fieldOwners = 'categories___children___internal___fieldOwners',
  categories___children___internal___ignoreType = 'categories___children___internal___ignoreType',
  categories___children___internal___mediaType = 'categories___children___internal___mediaType',
  categories___children___internal___owner = 'categories___children___internal___owner',
  categories___children___internal___type = 'categories___children___internal___type',
  categories___children___parent___children = 'categories___children___parent___children',
  categories___children___parent___id = 'categories___children___parent___id',
  categories___description = 'categories___description',
  categories___id = 'categories___id',
  categories___internal___content = 'categories___internal___content',
  categories___internal___contentDigest = 'categories___internal___contentDigest',
  categories___internal___description = 'categories___internal___description',
  categories___internal___fieldOwners = 'categories___internal___fieldOwners',
  categories___internal___ignoreType = 'categories___internal___ignoreType',
  categories___internal___mediaType = 'categories___internal___mediaType',
  categories___internal___owner = 'categories___internal___owner',
  categories___internal___type = 'categories___internal___type',
  categories___parent___children = 'categories___parent___children',
  categories___parent___children___children = 'categories___parent___children___children',
  categories___parent___children___id = 'categories___parent___children___id',
  categories___parent___id = 'categories___parent___id',
  categories___parent___internal___content = 'categories___parent___internal___content',
  categories___parent___internal___contentDigest = 'categories___parent___internal___contentDigest',
  categories___parent___internal___description = 'categories___parent___internal___description',
  categories___parent___internal___fieldOwners = 'categories___parent___internal___fieldOwners',
  categories___parent___internal___ignoreType = 'categories___parent___internal___ignoreType',
  categories___parent___internal___mediaType = 'categories___parent___internal___mediaType',
  categories___parent___internal___owner = 'categories___parent___internal___owner',
  categories___parent___internal___type = 'categories___parent___internal___type',
  categories___parent___parent___children = 'categories___parent___parent___children',
  categories___parent___parent___id = 'categories___parent___parent___id',
  categories___title = 'categories___title',
  children = 'children',
  children___children = 'children___children',
  children___children___children = 'children___children___children',
  children___children___children___children = 'children___children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___id = 'children___children___id',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___children___parent___children = 'children___children___parent___children',
  children___children___parent___id = 'children___children___parent___id',
  children___id = 'children___id',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  children___parent___children = 'children___parent___children',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___id = 'children___parent___id',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___parent___id = 'children___parent___parent___id',
  id = 'id',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  mainImage____key = 'mainImage____key',
  mainImage____rawAsset = 'mainImage____rawAsset',
  mainImage____rawCrop = 'mainImage____rawCrop',
  mainImage____rawHotspot = 'mainImage____rawHotspot',
  mainImage____type = 'mainImage____type',
  mainImage___asset____createdAt = 'mainImage___asset____createdAt',
  mainImage___asset____id = 'mainImage___asset____id',
  mainImage___asset____key = 'mainImage___asset____key',
  mainImage___asset____rawMetadata = 'mainImage___asset____rawMetadata',
  mainImage___asset____rawSource = 'mainImage___asset____rawSource',
  mainImage___asset____rev = 'mainImage___asset____rev',
  mainImage___asset____type = 'mainImage___asset____type',
  mainImage___asset____updatedAt = 'mainImage___asset____updatedAt',
  mainImage___asset___altText = 'mainImage___asset___altText',
  mainImage___asset___assetId = 'mainImage___asset___assetId',
  mainImage___asset___children = 'mainImage___asset___children',
  mainImage___asset___children___children = 'mainImage___asset___children___children',
  mainImage___asset___children___id = 'mainImage___asset___children___id',
  mainImage___asset___description = 'mainImage___asset___description',
  mainImage___asset___extension = 'mainImage___asset___extension',
  mainImage___asset___gatsbyImageData = 'mainImage___asset___gatsbyImageData',
  mainImage___asset___id = 'mainImage___asset___id',
  mainImage___asset___internal___content = 'mainImage___asset___internal___content',
  mainImage___asset___internal___contentDigest = 'mainImage___asset___internal___contentDigest',
  mainImage___asset___internal___description = 'mainImage___asset___internal___description',
  mainImage___asset___internal___fieldOwners = 'mainImage___asset___internal___fieldOwners',
  mainImage___asset___internal___ignoreType = 'mainImage___asset___internal___ignoreType',
  mainImage___asset___internal___mediaType = 'mainImage___asset___internal___mediaType',
  mainImage___asset___internal___owner = 'mainImage___asset___internal___owner',
  mainImage___asset___internal___type = 'mainImage___asset___internal___type',
  mainImage___asset___label = 'mainImage___asset___label',
  mainImage___asset___metadata____key = 'mainImage___asset___metadata____key',
  mainImage___asset___metadata____rawDimensions = 'mainImage___asset___metadata____rawDimensions',
  mainImage___asset___metadata____rawLocation = 'mainImage___asset___metadata____rawLocation',
  mainImage___asset___metadata____rawPalette = 'mainImage___asset___metadata____rawPalette',
  mainImage___asset___metadata____type = 'mainImage___asset___metadata____type',
  mainImage___asset___metadata___blurHash = 'mainImage___asset___metadata___blurHash',
  mainImage___asset___metadata___hasAlpha = 'mainImage___asset___metadata___hasAlpha',
  mainImage___asset___metadata___isOpaque = 'mainImage___asset___metadata___isOpaque',
  mainImage___asset___metadata___lqip = 'mainImage___asset___metadata___lqip',
  mainImage___asset___mimeType = 'mainImage___asset___mimeType',
  mainImage___asset___originalFilename = 'mainImage___asset___originalFilename',
  mainImage___asset___parent___children = 'mainImage___asset___parent___children',
  mainImage___asset___parent___id = 'mainImage___asset___parent___id',
  mainImage___asset___path = 'mainImage___asset___path',
  mainImage___asset___sha1hash = 'mainImage___asset___sha1hash',
  mainImage___asset___size = 'mainImage___asset___size',
  mainImage___asset___source____key = 'mainImage___asset___source____key',
  mainImage___asset___source____type = 'mainImage___asset___source____type',
  mainImage___asset___source___id = 'mainImage___asset___source___id',
  mainImage___asset___source___name = 'mainImage___asset___source___name',
  mainImage___asset___source___url = 'mainImage___asset___source___url',
  mainImage___asset___title = 'mainImage___asset___title',
  mainImage___asset___uploadId = 'mainImage___asset___uploadId',
  mainImage___asset___url = 'mainImage___asset___url',
  mainImage___crop____key = 'mainImage___crop____key',
  mainImage___crop____type = 'mainImage___crop____type',
  mainImage___crop___bottom = 'mainImage___crop___bottom',
  mainImage___crop___left = 'mainImage___crop___left',
  mainImage___crop___right = 'mainImage___crop___right',
  mainImage___crop___top = 'mainImage___crop___top',
  mainImage___hotspot____key = 'mainImage___hotspot____key',
  mainImage___hotspot____type = 'mainImage___hotspot____type',
  mainImage___hotspot___height = 'mainImage___hotspot___height',
  mainImage___hotspot___width = 'mainImage___hotspot___width',
  mainImage___hotspot___x = 'mainImage___hotspot___x',
  mainImage___hotspot___y = 'mainImage___hotspot___y',
  parent___children = 'parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___id = 'parent___children___id',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___id = 'parent___id',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___parent___id = 'parent___parent___parent___id',
  publishedAt = 'publishedAt',
  slug____key = 'slug____key',
  slug____type = 'slug____type',
  slug___current = 'slug___current',
  title = 'title'
}

export type SanityPostFilterInput = {
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _id?: InputMaybe<StringQueryOperatorInput>;
  _key?: InputMaybe<StringQueryOperatorInput>;
  _rawAuthor?: InputMaybe<JsonQueryOperatorInput>;
  _rawBody?: InputMaybe<JsonQueryOperatorInput>;
  _rawCategories?: InputMaybe<JsonQueryOperatorInput>;
  _rawMainImage?: InputMaybe<JsonQueryOperatorInput>;
  _rawSlug?: InputMaybe<JsonQueryOperatorInput>;
  _rev?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  author?: InputMaybe<SanityAuthorFilterInput>;
  body?: InputMaybe<SanityBlockFilterListInput>;
  categories?: InputMaybe<SanityCategoryFilterListInput>;
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  mainImage?: InputMaybe<SanityImageFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  publishedAt?: InputMaybe<DateQueryOperatorInput>;
  slug?: InputMaybe<SanitySlugFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
};

export type SanityPostGroupConnection = {
  __typename?: 'SanityPostGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SanityPostEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<SanityPostGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SanityPost>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SanityPostGroupConnectionDistinctArgs = {
  field: SanityPostFieldsEnum;
};


export type SanityPostGroupConnectionGroupArgs = {
  field: SanityPostFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SanityPostGroupConnectionMaxArgs = {
  field: SanityPostFieldsEnum;
};


export type SanityPostGroupConnectionMinArgs = {
  field: SanityPostFieldsEnum;
};


export type SanityPostGroupConnectionSumArgs = {
  field: SanityPostFieldsEnum;
};

export type SanityPostSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SanityPostFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SanityResolveReferencesConfiguration = {
  /** Max depth to resolve references to */
  maxDepth: Scalars['Int'];
};

export type SanitySiteSettings = Node & SanityDocument & {
  __typename?: 'SanitySiteSettings';
  _createdAt?: Maybe<Scalars['Date']>;
  _id?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  _rev?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  children: Array<Node>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  internal: Internal;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
  parent?: Maybe<Node>;
  title?: Maybe<Scalars['String']>;
};


export type SanitySiteSettings_CreatedAtArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type SanitySiteSettings_UpdatedAtArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type SanitySiteSettingsConnection = {
  __typename?: 'SanitySiteSettingsConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SanitySiteSettingsEdge>;
  group: Array<SanitySiteSettingsGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SanitySiteSettings>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SanitySiteSettingsConnectionDistinctArgs = {
  field: SanitySiteSettingsFieldsEnum;
};


export type SanitySiteSettingsConnectionGroupArgs = {
  field: SanitySiteSettingsFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SanitySiteSettingsConnectionMaxArgs = {
  field: SanitySiteSettingsFieldsEnum;
};


export type SanitySiteSettingsConnectionMinArgs = {
  field: SanitySiteSettingsFieldsEnum;
};


export type SanitySiteSettingsConnectionSumArgs = {
  field: SanitySiteSettingsFieldsEnum;
};

export type SanitySiteSettingsEdge = {
  __typename?: 'SanitySiteSettingsEdge';
  next?: Maybe<SanitySiteSettings>;
  node: SanitySiteSettings;
  previous?: Maybe<SanitySiteSettings>;
};

export enum SanitySiteSettingsFieldsEnum {
  _createdAt = '_createdAt',
  _id = '_id',
  _key = '_key',
  _rev = '_rev',
  _type = '_type',
  _updatedAt = '_updatedAt',
  children = 'children',
  children___children = 'children___children',
  children___children___children = 'children___children___children',
  children___children___children___children = 'children___children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___id = 'children___children___id',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___children___parent___children = 'children___children___parent___children',
  children___children___parent___id = 'children___children___parent___id',
  children___id = 'children___id',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  children___parent___children = 'children___parent___children',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___id = 'children___parent___id',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___parent___id = 'children___parent___parent___id',
  description = 'description',
  id = 'id',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  keywords = 'keywords',
  parent___children = 'parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___id = 'parent___children___id',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___id = 'parent___id',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___parent___id = 'parent___parent___parent___id',
  title = 'title'
}

export type SanitySiteSettingsFilterInput = {
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _id?: InputMaybe<StringQueryOperatorInput>;
  _key?: InputMaybe<StringQueryOperatorInput>;
  _rev?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  keywords?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
};

export type SanitySiteSettingsGroupConnection = {
  __typename?: 'SanitySiteSettingsGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SanitySiteSettingsEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<SanitySiteSettingsGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SanitySiteSettings>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SanitySiteSettingsGroupConnectionDistinctArgs = {
  field: SanitySiteSettingsFieldsEnum;
};


export type SanitySiteSettingsGroupConnectionGroupArgs = {
  field: SanitySiteSettingsFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SanitySiteSettingsGroupConnectionMaxArgs = {
  field: SanitySiteSettingsFieldsEnum;
};


export type SanitySiteSettingsGroupConnectionMinArgs = {
  field: SanitySiteSettingsFieldsEnum;
};


export type SanitySiteSettingsGroupConnectionSumArgs = {
  field: SanitySiteSettingsFieldsEnum;
};

export type SanitySiteSettingsSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SanitySiteSettingsFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SanitySlug = {
  __typename?: 'SanitySlug';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  current?: Maybe<Scalars['String']>;
};

export type SanitySlugFilterInput = {
  _key?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  current?: InputMaybe<StringQueryOperatorInput>;
};

export type SanitySpan = {
  __typename?: 'SanitySpan';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  marks?: Maybe<Array<Maybe<Scalars['String']>>>;
  text?: Maybe<Scalars['String']>;
};

export type SanitySpanFilterInput = {
  _key?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  marks?: InputMaybe<StringQueryOperatorInput>;
  text?: InputMaybe<StringQueryOperatorInput>;
};

export type SanitySpanFilterListInput = {
  elemMatch?: InputMaybe<SanitySpanFilterInput>;
};

export type Site = Node & {
  __typename?: 'Site';
  buildTime?: Maybe<Scalars['Date']>;
  children: Array<Node>;
  host?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  internal: Internal;
  jsxRuntime?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  pathPrefix?: Maybe<Scalars['String']>;
  polyfill?: Maybe<Scalars['Boolean']>;
  port?: Maybe<Scalars['Int']>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  trailingSlash?: Maybe<Scalars['String']>;
};


export type SiteBuildTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type SiteBuildMetadata = Node & {
  __typename?: 'SiteBuildMetadata';
  buildTime?: Maybe<Scalars['Date']>;
  children: Array<Node>;
  id: Scalars['ID'];
  internal: Internal;
  parent?: Maybe<Node>;
};


export type SiteBuildMetadataBuildTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type SiteBuildMetadataConnection = {
  __typename?: 'SiteBuildMetadataConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SiteBuildMetadataEdge>;
  group: Array<SiteBuildMetadataGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  field: SiteBuildMetadataFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SiteBuildMetadataConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  __typename?: 'SiteBuildMetadataEdge';
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export enum SiteBuildMetadataFieldsEnum {
  buildTime = 'buildTime',
  children = 'children',
  children___children = 'children___children',
  children___children___children = 'children___children___children',
  children___children___children___children = 'children___children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___id = 'children___children___id',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___children___parent___children = 'children___children___parent___children',
  children___children___parent___id = 'children___children___parent___id',
  children___id = 'children___id',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  children___parent___children = 'children___parent___children',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___id = 'children___parent___id',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___parent___id = 'children___parent___parent___id',
  id = 'id',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  parent___children = 'parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___id = 'parent___children___id',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___id = 'parent___id',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___parent___id = 'parent___parent___parent___id'
}

export type SiteBuildMetadataFilterInput = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
};

export type SiteBuildMetadataGroupConnection = {
  __typename?: 'SiteBuildMetadataGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SiteBuildMetadataEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<SiteBuildMetadataGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SiteBuildMetadataGroupConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionGroupArgs = {
  field: SiteBuildMetadataFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SiteBuildMetadataGroupConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SiteBuildMetadataFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteConnection = {
  __typename?: 'SiteConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SiteEdge>;
  group: Array<SiteGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionGroupArgs = {
  field: SiteFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SiteConnectionMaxArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionMinArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionSumArgs = {
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  __typename?: 'SiteEdge';
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export enum SiteFieldsEnum {
  buildTime = 'buildTime',
  children = 'children',
  children___children = 'children___children',
  children___children___children = 'children___children___children',
  children___children___children___children = 'children___children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___id = 'children___children___id',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___children___parent___children = 'children___children___parent___children',
  children___children___parent___id = 'children___children___parent___id',
  children___id = 'children___id',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  children___parent___children = 'children___parent___children',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___id = 'children___parent___id',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___parent___id = 'children___parent___parent___id',
  host = 'host',
  id = 'id',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  jsxRuntime = 'jsxRuntime',
  parent___children = 'parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___id = 'parent___children___id',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___id = 'parent___id',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___parent___id = 'parent___parent___parent___id',
  pathPrefix = 'pathPrefix',
  polyfill = 'polyfill',
  port = 'port',
  siteMetadata___description = 'siteMetadata___description',
  siteMetadata___siteUrl = 'siteMetadata___siteUrl',
  siteMetadata___title = 'siteMetadata___title',
  trailingSlash = 'trailingSlash'
}

export type SiteFilterInput = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  host?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  jsxRuntime?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pathPrefix?: InputMaybe<StringQueryOperatorInput>;
  polyfill?: InputMaybe<BooleanQueryOperatorInput>;
  port?: InputMaybe<IntQueryOperatorInput>;
  siteMetadata?: InputMaybe<SiteSiteMetadataFilterInput>;
  trailingSlash?: InputMaybe<StringQueryOperatorInput>;
};

export type SiteFunction = Node & {
  __typename?: 'SiteFunction';
  absoluteCompiledFilePath: Scalars['String'];
  children: Array<Node>;
  functionRoute: Scalars['String'];
  id: Scalars['ID'];
  internal: Internal;
  matchPath?: Maybe<Scalars['String']>;
  originalAbsoluteFilePath: Scalars['String'];
  originalRelativeFilePath: Scalars['String'];
  parent?: Maybe<Node>;
  pluginName: Scalars['String'];
  relativeCompiledFilePath: Scalars['String'];
};

export type SiteFunctionConnection = {
  __typename?: 'SiteFunctionConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SiteFunctionEdge>;
  group: Array<SiteFunctionGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SiteFunctionConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionGroupArgs = {
  field: SiteFunctionFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SiteFunctionConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionEdge = {
  __typename?: 'SiteFunctionEdge';
  next?: Maybe<SiteFunction>;
  node: SiteFunction;
  previous?: Maybe<SiteFunction>;
};

export enum SiteFunctionFieldsEnum {
  absoluteCompiledFilePath = 'absoluteCompiledFilePath',
  children = 'children',
  children___children = 'children___children',
  children___children___children = 'children___children___children',
  children___children___children___children = 'children___children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___id = 'children___children___id',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___children___parent___children = 'children___children___parent___children',
  children___children___parent___id = 'children___children___parent___id',
  children___id = 'children___id',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  children___parent___children = 'children___parent___children',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___id = 'children___parent___id',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___parent___id = 'children___parent___parent___id',
  functionRoute = 'functionRoute',
  id = 'id',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  matchPath = 'matchPath',
  originalAbsoluteFilePath = 'originalAbsoluteFilePath',
  originalRelativeFilePath = 'originalRelativeFilePath',
  parent___children = 'parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___id = 'parent___children___id',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___id = 'parent___id',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___parent___id = 'parent___parent___parent___id',
  pluginName = 'pluginName',
  relativeCompiledFilePath = 'relativeCompiledFilePath'
}

export type SiteFunctionFilterInput = {
  absoluteCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  functionRoute?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pluginName?: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
};

export type SiteFunctionGroupConnection = {
  __typename?: 'SiteFunctionGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SiteFunctionEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<SiteFunctionGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SiteFunctionGroupConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionGroupArgs = {
  field: SiteFunctionFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SiteFunctionGroupConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SiteFunctionFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteGroupConnection = {
  __typename?: 'SiteGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SiteEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<SiteGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SiteGroupConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionGroupArgs = {
  field: SiteFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SiteGroupConnectionMaxArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionMinArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionSumArgs = {
  field: SiteFieldsEnum;
};

export type SitePage = Node & {
  __typename?: 'SitePage';
  children: Array<Node>;
  component: Scalars['String'];
  componentChunkName: Scalars['String'];
  id: Scalars['ID'];
  internal: Internal;
  internalComponentName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  pageContext?: Maybe<Scalars['JSON']>;
  parent?: Maybe<Node>;
  path: Scalars['String'];
  pluginCreator?: Maybe<SitePlugin>;
};

export type SitePageConnection = {
  __typename?: 'SitePageConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SitePageEdge>;
  group: Array<SitePageGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionGroupArgs = {
  field: SitePageFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SitePageConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionMinArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionSumArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageEdge = {
  __typename?: 'SitePageEdge';
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export enum SitePageFieldsEnum {
  children = 'children',
  children___children = 'children___children',
  children___children___children = 'children___children___children',
  children___children___children___children = 'children___children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___id = 'children___children___id',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___children___parent___children = 'children___children___parent___children',
  children___children___parent___id = 'children___children___parent___id',
  children___id = 'children___id',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  children___parent___children = 'children___parent___children',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___id = 'children___parent___id',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___parent___id = 'children___parent___parent___id',
  component = 'component',
  componentChunkName = 'componentChunkName',
  id = 'id',
  internalComponentName = 'internalComponentName',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  matchPath = 'matchPath',
  pageContext = 'pageContext',
  parent___children = 'parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___id = 'parent___children___id',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___id = 'parent___id',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___parent___id = 'parent___parent___parent___id',
  path = 'path',
  pluginCreator___browserAPIs = 'pluginCreator___browserAPIs',
  pluginCreator___children = 'pluginCreator___children',
  pluginCreator___children___children = 'pluginCreator___children___children',
  pluginCreator___children___children___children = 'pluginCreator___children___children___children',
  pluginCreator___children___children___id = 'pluginCreator___children___children___id',
  pluginCreator___children___id = 'pluginCreator___children___id',
  pluginCreator___children___internal___content = 'pluginCreator___children___internal___content',
  pluginCreator___children___internal___contentDigest = 'pluginCreator___children___internal___contentDigest',
  pluginCreator___children___internal___description = 'pluginCreator___children___internal___description',
  pluginCreator___children___internal___fieldOwners = 'pluginCreator___children___internal___fieldOwners',
  pluginCreator___children___internal___ignoreType = 'pluginCreator___children___internal___ignoreType',
  pluginCreator___children___internal___mediaType = 'pluginCreator___children___internal___mediaType',
  pluginCreator___children___internal___owner = 'pluginCreator___children___internal___owner',
  pluginCreator___children___internal___type = 'pluginCreator___children___internal___type',
  pluginCreator___children___parent___children = 'pluginCreator___children___parent___children',
  pluginCreator___children___parent___id = 'pluginCreator___children___parent___id',
  pluginCreator___id = 'pluginCreator___id',
  pluginCreator___internal___content = 'pluginCreator___internal___content',
  pluginCreator___internal___contentDigest = 'pluginCreator___internal___contentDigest',
  pluginCreator___internal___description = 'pluginCreator___internal___description',
  pluginCreator___internal___fieldOwners = 'pluginCreator___internal___fieldOwners',
  pluginCreator___internal___ignoreType = 'pluginCreator___internal___ignoreType',
  pluginCreator___internal___mediaType = 'pluginCreator___internal___mediaType',
  pluginCreator___internal___owner = 'pluginCreator___internal___owner',
  pluginCreator___internal___type = 'pluginCreator___internal___type',
  pluginCreator___name = 'pluginCreator___name',
  pluginCreator___nodeAPIs = 'pluginCreator___nodeAPIs',
  pluginCreator___packageJson = 'pluginCreator___packageJson',
  pluginCreator___parent___children = 'pluginCreator___parent___children',
  pluginCreator___parent___children___children = 'pluginCreator___parent___children___children',
  pluginCreator___parent___children___id = 'pluginCreator___parent___children___id',
  pluginCreator___parent___id = 'pluginCreator___parent___id',
  pluginCreator___parent___internal___content = 'pluginCreator___parent___internal___content',
  pluginCreator___parent___internal___contentDigest = 'pluginCreator___parent___internal___contentDigest',
  pluginCreator___parent___internal___description = 'pluginCreator___parent___internal___description',
  pluginCreator___parent___internal___fieldOwners = 'pluginCreator___parent___internal___fieldOwners',
  pluginCreator___parent___internal___ignoreType = 'pluginCreator___parent___internal___ignoreType',
  pluginCreator___parent___internal___mediaType = 'pluginCreator___parent___internal___mediaType',
  pluginCreator___parent___internal___owner = 'pluginCreator___parent___internal___owner',
  pluginCreator___parent___internal___type = 'pluginCreator___parent___internal___type',
  pluginCreator___parent___parent___children = 'pluginCreator___parent___parent___children',
  pluginCreator___parent___parent___id = 'pluginCreator___parent___parent___id',
  pluginCreator___pluginFilepath = 'pluginCreator___pluginFilepath',
  pluginCreator___pluginOptions = 'pluginCreator___pluginOptions',
  pluginCreator___resolve = 'pluginCreator___resolve',
  pluginCreator___ssrAPIs = 'pluginCreator___ssrAPIs',
  pluginCreator___version = 'pluginCreator___version'
}

export type SitePageFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  component?: InputMaybe<StringQueryOperatorInput>;
  componentChunkName?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  internalComponentName?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  pageContext?: InputMaybe<JsonQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  path?: InputMaybe<StringQueryOperatorInput>;
  pluginCreator?: InputMaybe<SitePluginFilterInput>;
};

export type SitePageGroupConnection = {
  __typename?: 'SitePageGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SitePageEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<SitePageGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SitePageGroupConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionGroupArgs = {
  field: SitePageFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SitePageGroupConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionMinArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionSumArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SitePageFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
  __typename?: 'SitePlugin';
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  children: Array<Node>;
  id: Scalars['ID'];
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  packageJson?: Maybe<Scalars['JSON']>;
  parent?: Maybe<Node>;
  pluginFilepath?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<Scalars['JSON']>;
  resolve?: Maybe<Scalars['String']>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginConnection = {
  __typename?: 'SitePluginConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SitePluginEdge>;
  group: Array<SitePluginGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionGroupArgs = {
  field: SitePluginFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SitePluginConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  __typename?: 'SitePluginEdge';
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export enum SitePluginFieldsEnum {
  browserAPIs = 'browserAPIs',
  children = 'children',
  children___children = 'children___children',
  children___children___children = 'children___children___children',
  children___children___children___children = 'children___children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___id = 'children___children___id',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___children___parent___children = 'children___children___parent___children',
  children___children___parent___id = 'children___children___parent___id',
  children___id = 'children___id',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  children___parent___children = 'children___parent___children',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___id = 'children___parent___id',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___parent___id = 'children___parent___parent___id',
  id = 'id',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  name = 'name',
  nodeAPIs = 'nodeAPIs',
  packageJson = 'packageJson',
  parent___children = 'parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___id = 'parent___children___id',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___id = 'parent___id',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___parent___id = 'parent___parent___parent___id',
  pluginFilepath = 'pluginFilepath',
  pluginOptions = 'pluginOptions',
  resolve = 'resolve',
  ssrAPIs = 'ssrAPIs',
  version = 'version'
}

export type SitePluginFilterInput = {
  browserAPIs?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs?: InputMaybe<StringQueryOperatorInput>;
  packageJson?: InputMaybe<JsonQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pluginFilepath?: InputMaybe<StringQueryOperatorInput>;
  pluginOptions?: InputMaybe<JsonQueryOperatorInput>;
  resolve?: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs?: InputMaybe<StringQueryOperatorInput>;
  version?: InputMaybe<StringQueryOperatorInput>;
};

export type SitePluginGroupConnection = {
  __typename?: 'SitePluginGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SitePluginEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<SitePluginGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SitePluginGroupConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionGroupArgs = {
  field: SitePluginFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SitePluginGroupConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SitePluginFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
  __typename?: 'SiteSiteMetadata';
  description?: Maybe<Scalars['String']>;
  siteUrl?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataFilterInput = {
  description?: InputMaybe<StringQueryOperatorInput>;
  siteUrl?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
};

export type SiteSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SiteFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export enum SortOrderEnum {
  ASC = 'ASC',
  DESC = 'DESC'
}

export type StringQueryOperatorInput = {
  eq?: InputMaybe<Scalars['String']>;
  glob?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['String']>;
};

export type TransformOptions = {
  cropFocus?: InputMaybe<ImageCropFocus>;
  duotone?: InputMaybe<DuotoneGradient>;
  fit?: InputMaybe<ImageFit>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
};

export type WebPOptions = {
  quality?: InputMaybe<Scalars['Int']>;
};

export type SiteSettingsQueryVariables = Exact<{ [key: string]: never; }>;


export type SiteSettingsQuery = { __typename?: 'Query', sanitySiteSettings?: { __typename?: 'SanitySiteSettings', title?: string | null, description?: string | null, keywords?: Array<string | null> | null } | null };

export type PostsQueryVariables = Exact<{ [key: string]: never; }>;


export type PostsQuery = { __typename?: 'Query', allSanityPost: { __typename?: 'SanityPostConnection', edges: Array<{ __typename?: 'SanityPostEdge', node: { __typename?: 'SanityPost', id: string, title?: string | null, _updatedAt?: any | null, _rawBody?: any | null, slug?: { __typename?: 'SanitySlug', current?: string | null } | null, categories?: Array<{ __typename?: 'SanityCategory', title?: string | null } | null> | null, author?: { __typename?: 'SanityAuthor', name?: string | null, id: string } | null, mainImage?: { __typename?: 'SanityImage', asset?: { __typename?: 'SanityImageAsset', url?: string | null, gatsbyImageData: any } | null } | null } }> } };

export type AuthorAndAuthorPostsBySlugQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type AuthorAndAuthorPostsBySlugQuery = { __typename?: 'Query', sanityAuthor?: { __typename?: 'SanityAuthor', name?: string | null, _rawBio?: any | null, image?: { __typename?: 'SanityImage', asset?: { __typename?: 'SanityImageAsset', gatsbyImageData: any } | null } | null } | null, allSanityPost: { __typename?: 'SanityPostConnection', edges: Array<{ __typename?: 'SanityPostEdge', node: { __typename?: 'SanityPost', title?: string | null, _rawBody?: any | null, slug?: { __typename?: 'SanitySlug', current?: string | null } | null, mainImage?: { __typename?: 'SanityImage', asset?: { __typename?: 'SanityImageAsset', gatsbyImageData: any } | null } | null, categories?: Array<{ __typename?: 'SanityCategory', title?: string | null } | null> | null } }> } };

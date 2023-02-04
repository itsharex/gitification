import { markRaw } from 'vue'

import MoreIcon from 'virtual:icons/octicon/kebab-horizontal-24'
import GearIcon from 'virtual:icons/octicon/gear-24'
import HomeIcon from 'virtual:icons/octicon/home-24'
import SyncIcon from 'virtual:icons/octicon/sync-24'
import MuteIcon from 'virtual:icons/octicon/mute-24'
import GithubIcon from 'virtual:icons/octicon/mark-github-16'
import UnmuteIcon from 'virtual:icons/octicon/unmute-24'
import PullRequestIcon from 'virtual:icons/octicon/git-pull-request-24'
import CheckIcon from 'virtual:icons/octicon/check-24'
import CheckFillIcon from 'virtual:icons/octicon/check-circle-fill-12'
import XIcon from 'virtual:icons/octicon/x-24'
import BellIcon from 'virtual:icons/octicon/bell-24'
import CommitIcon from 'virtual:icons/octicon/git-commit-24'
import CommentDiscussionsIcon from 'virtual:icons/octicon/comment-discussion-24'
import IssueOpenedIcon from 'virtual:icons/octicon/issue-opened-24'
import TagIcon from 'virtual:icons/octicon/tag-24'
import AlertIcon from 'virtual:icons/octicon/alert-24'
import QuestionIcon from 'virtual:icons/octicon/question-24'
import MailIcon from 'virtual:icons/octicon/mail-24'

export const Icons = {
  More: markRaw(MoreIcon),
  Gear: markRaw(GearIcon),
  Home: markRaw(HomeIcon),
  Sync: markRaw(SyncIcon),
  PullRequest: markRaw(PullRequestIcon),
  Mute: markRaw(MuteIcon),
  Unmute: markRaw(UnmuteIcon),
  Github: markRaw(GithubIcon),
  Check: markRaw(CheckIcon),
  X: markRaw(XIcon),
  CheckFill: markRaw(CheckFillIcon),
  Bell: markRaw(BellIcon),
  Commit: markRaw(CommitIcon),
  CommentDiscussions: markRaw(CommentDiscussionsIcon),
  IssueOpened: markRaw(IssueOpenedIcon),
  Tag: markRaw(TagIcon),
  Alert: markRaw(AlertIcon),
  Question: markRaw(QuestionIcon),
  Mail: markRaw(MailIcon),
}